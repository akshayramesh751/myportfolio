$sourceBase = "e:\new portf\react-bits-repo\src\ts-tailwind"
$targetBase = "e:\new portf\portfolio\src\components\ui"

$components = @(
  "Animations/Aurora",
  "Animations/LaserFlow",
  "Animations/Particles",
  "Animations/LogoLoop",
  "Animations/SplashCursor",
  "Animations/BlobCursor",
  "Animations/Magnet",
  "Animations/ClickSpark",
  "Animations/FadeContent",
  "Animations/AnimatedContent",
  "TextAnimations/BlurText",
  "TextAnimations/SplitText",
  "TextAnimations/CountUp",
  "TextAnimations/CircularText",
  "TextAnimations/GradientText",
  "TextAnimations/ScrambleText",
  "Components/SpotlightCard",
  "Components/TiltedCard",
  "Components/DockMenu",
  "Components/Dock",
  "Components/StarBorder",
  "Components/AnimatedList",
  "Components/Stepper",
  "Backgrounds/Aurora",
  "Backgrounds/Beams",
  "Backgrounds/GridDistortion",
  "Backgrounds/DotGrid"
)

foreach ($comp in $components) {
  $source = "$sourceBase\$comp"
  # Clean path by converting forward slashes to backslashes
  $source = $source -replace '/', '\'
  $target = "$targetBase\$comp"
  $target = $target -replace '/', '\'

  if (Test-Path $source) {
    New-Item -ItemType Directory -Force -Path $target | Out-Null
    Copy-Item -Path "$source\*" -Destination $target -Recurse -Force
  } else {
    Write-Host "Warning: Source not found -> $source"
  }
}
Write-Host "Done copying components."
