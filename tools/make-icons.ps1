Add-Type -AssemblyName System.Drawing
$iconRoot = Join-Path (Split-Path $PSScriptRoot -Parent) 'icons'
New-Item -ItemType Directory -Force -Path $iconRoot | Out-Null
foreach ($size in @(180,192,512)) {
    $bitmap = [System.Drawing.Bitmap]::new($size,$size)
    $g = [System.Drawing.Graphics]::FromImage($bitmap)
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
    $g.Clear([System.Drawing.ColorTranslator]::FromHtml('#eaf1e7'))
    $g.ScaleTransform($size / 100.0, $size / 100.0)
    $outline = [System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml('#527354'),2.5)
    $light = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#fafcf6'))
    $green = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#82a778'))
    $eye = [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml('#263e2b'))
    $g.FillRectangle($light,29,18,42,64)
    $g.DrawRectangle($outline,29,18,42,64)
    $g.DrawLine($outline,29,41,71,41)
    $g.DrawLine($outline,35,26,35,34)
    $g.DrawLine($outline,35,48,35,59)
    $points = [System.Drawing.PointF[]]@([System.Drawing.PointF]::new(44,72),[System.Drawing.PointF]::new(44,55),[System.Drawing.PointF]::new(50,45),[System.Drawing.PointF]::new(65,45),[System.Drawing.PointF]::new(65,55),[System.Drawing.PointF]::new(57,55),[System.Drawing.PointF]::new(57,65),[System.Drawing.PointF]::new(65,65),[System.Drawing.PointF]::new(59,74),[System.Drawing.PointF]::new(44,74),[System.Drawing.PointF]::new(36,64),[System.Drawing.PointF]::new(44,68))
    $g.FillPolygon($green,$points)
    $g.FillEllipse($eye,59,48,3,3)
    $bitmap.Save((Join-Path $iconRoot "icon-$size.png"),[System.Drawing.Imaging.ImageFormat]::Png)
    if ($size -eq 512) { $bitmap.Save((Join-Path $iconRoot 'icon-maskable-512.png'),[System.Drawing.Imaging.ImageFormat]::Png) }
    $g.Dispose(); $bitmap.Dispose(); $outline.Dispose(); $light.Dispose(); $green.Dispose(); $eye.Dispose()
}
