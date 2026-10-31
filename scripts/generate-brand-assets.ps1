# Rebuild the code-native OneStyle icon family and social card without dependencies.
Add-Type -AssemblyName System.Drawing
$publicDirectory = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../public'))
$ink = [Drawing.ColorTranslator]::FromHtml('#272920')
$paper = [Drawing.ColorTranslator]::FromHtml('#faf9f6')
$accent = [Drawing.ColorTranslator]::FromHtml('#c4cbae')
function New-BrandIcon([int]$Size) {
  $bitmap = [Drawing.Bitmap]::new($Size, $Size)
  $graphics = [Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.Clear([Drawing.Color]::Transparent)
  $graphics.ScaleTransform($Size / 128.0, $Size / 128.0)
  $shape = [Drawing.Drawing2D.GraphicsPath]::new()
  $shape.AddArc(0, 0, 56, 56, 180, 90)
  $shape.AddArc(72, 0, 56, 56, 270, 90)
  $shape.AddArc(72, 72, 56, 56, 0, 90)
  $shape.AddArc(0, 72, 56, 56, 90, 90)
  $shape.CloseFigure()
  $backgroundBrush = [Drawing.SolidBrush]::new($ink)
  $dotBrush = [Drawing.SolidBrush]::new($accent)
  $stroke = [Drawing.Pen]::new($paper, 8)
  try {
    $graphics.FillPath($backgroundBrush, $shape)
    $graphics.DrawEllipse($stroke, 33, 29, 50, 68)
    $graphics.FillEllipse($dotBrush, 94, 88, 10, 10)
  } finally {
    $shape.Dispose(); $backgroundBrush.Dispose(); $dotBrush.Dispose(); $stroke.Dispose(); $graphics.Dispose()
  }
  return $bitmap
}
foreach ($entry in @(@{Size=180;Name='apple-touch-icon.png'}, @{Size=192;Name='logo192.png'}, @{Size=512;Name='logo512.png'})) {
  $icon = New-BrandIcon $entry.Size
  try { $icon.Save((Join-Path $publicDirectory $entry.Name), [Drawing.Imaging.ImageFormat]::Png) } finally { $icon.Dispose() }
}
# ICO directory with PNG payloads provides a crisp icon at standard browser sizes.
$payloads = [Collections.Generic.List[object]]::new()
$sizes = @(16,32,48,256)
foreach ($size in $sizes) {
  $icon = New-BrandIcon $size
  $memory = [IO.MemoryStream]::new()
  try { $icon.Save($memory, [Drawing.Imaging.ImageFormat]::Png); $payloads.Add($memory.ToArray()) } finally { $memory.Dispose(); $icon.Dispose() }
}
$stream = [IO.File]::Create((Join-Path $publicDirectory 'favicon.ico'))
$writer = [IO.BinaryWriter]::new($stream)
try {
  $writer.Write([uint16]0); $writer.Write([uint16]1); $writer.Write([uint16]$sizes.Count)
  $offset = 6 + 16 * $sizes.Count
  for ($index=0; $index -lt $sizes.Count; $index++) {
    $dimension = if ($sizes[$index] -eq 256) { 0 } else { $sizes[$index] }
    $writer.Write([byte]$dimension); $writer.Write([byte]$dimension); $writer.Write([byte]0); $writer.Write([byte]0)
    $writer.Write([uint16]1); $writer.Write([uint16]32); $writer.Write([uint32]$payloads[$index].Length); $writer.Write([uint32]$offset)
    $offset += $payloads[$index].Length
  }
  foreach ($bytes in $payloads) { $writer.Write([byte[]]$bytes) }
} finally { $writer.Dispose(); $stream.Dispose() }
$card = [Drawing.Bitmap]::new(1200,630)
$g = [Drawing.Graphics]::FromImage($card)
$g.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.Clear($paper)
$inkBrush = [Drawing.SolidBrush]::new($ink)
$oliveBrush = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#68704e'))
$panelBrush = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#e7eadf'))
$line = [Drawing.Pen]::new([Drawing.ColorTranslator]::FromHtml('#dedfd6'),1)
$symbolStroke = [Drawing.Pen]::new($ink,12)
$brandFont = [Drawing.Font]::new('Georgia',48,[Drawing.FontStyle]::Regular,[Drawing.GraphicsUnit]::Pixel)
$titleFont = [Drawing.Font]::new('Georgia',72,[Drawing.FontStyle]::Regular,[Drawing.GraphicsUnit]::Pixel)
$italicFont = [Drawing.Font]::new('Georgia',72,[Drawing.FontStyle]::Italic,[Drawing.GraphicsUnit]::Pixel)
$smallFont = [Drawing.Font]::new('Arial',14,[Drawing.FontStyle]::Regular,[Drawing.GraphicsUnit]::Pixel)
try {
  $g.DrawString('onestyle', $brandFont, $inkBrush, 66, 56)
  $g.DrawString('THE EVERYDAY, RECONSIDERED', $smallFont, $oliveBrush, 72, 185)
  $g.DrawString('Good style.', $titleFont, $inkBrush, 64, 235)
  $g.DrawString('Great feeling.', $italicFont, $oliveBrush, 64, 325)
  $g.DrawString('Wear it your way.', $smallFont, $inkBrush, 72, 474)
  $g.FillRectangle($panelBrush, 820, 70, 308, 440)
  $g.DrawEllipse($symbolStroke, 905, 196, 110, 150)
  $g.FillEllipse($oliveBrush, 1042, 337, 17, 17)
  $g.DrawLine($line,72,552,1128,552)
  $g.DrawString('WOMEN  /  MEN  /  LITTLE ONES', $smallFont, $oliveBrush, 72, 577)
  $card.Save((Join-Path $publicDirectory 'social-preview.png'), [Drawing.Imaging.ImageFormat]::Png)
} finally {
  $g.Dispose(); $card.Dispose(); $inkBrush.Dispose(); $oliveBrush.Dispose(); $panelBrush.Dispose(); $line.Dispose(); $symbolStroke.Dispose()
  $brandFont.Dispose(); $titleFont.Dispose(); $italicFont.Dispose(); $smallFont.Dispose()
}
Write-Output 'Generated OneStyle favicon, app icons, Apple touch icon, and 1200 x 630 sharing card.'
