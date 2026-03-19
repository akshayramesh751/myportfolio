$ErrorActionPreference = "Stop"

$urls = @(
  "https://reactbits.dev/ts/tailwind/Animations/Aurora",
  "https://reactbits.dev/ts/tailwind/Animations/LaserFlow",
  "https://reactbits.dev/ts/tailwind/Animations/Particles",
  "https://reactbits.dev/ts/tailwind/Animations/LogoLoop",
  "https://reactbits.dev/ts/tailwind/Animations/SplashCursor",
  "https://reactbits.dev/ts/tailwind/Animations/BlobCursor",
  "https://reactbits.dev/ts/tailwind/Animations/Magnet",
  "https://reactbits.dev/ts/tailwind/Animations/ClickSpark",
  "https://reactbits.dev/ts/tailwind/Animations/FadeContent",
  "https://reactbits.dev/ts/tailwind/Animations/AnimatedContent",
  "https://reactbits.dev/ts/tailwind/TextAnimations/BlurText",
  "https://reactbits.dev/ts/tailwind/TextAnimations/SplitText",
  "https://reactbits.dev/ts/tailwind/TextAnimations/CountUp",
  "https://reactbits.dev/ts/tailwind/TextAnimations/CircularText",
  "https://reactbits.dev/ts/tailwind/TextAnimations/GradientText",
  "https://reactbits.dev/ts/tailwind/TextAnimations/ScrambleText",
  "https://reactbits.dev/ts/tailwind/Components/SpotlightCard",
  "https://reactbits.dev/ts/tailwind/Components/TiltedCard",
  "https://reactbits.dev/ts/tailwind/Components/DockMenu",
  "https://reactbits.dev/ts/tailwind/Components/Dock",
  "https://reactbits.dev/ts/tailwind/Components/StarBorder",
  "https://reactbits.dev/ts/tailwind/Components/AnimatedList",
  "https://reactbits.dev/ts/tailwind/Components/Stepper",
  "https://reactbits.dev/ts/tailwind/Backgrounds/Aurora",
  "https://reactbits.dev/ts/tailwind/Backgrounds/Beams",
  "https://reactbits.dev/ts/tailwind/Backgrounds/GridDistortion",
  "https://reactbits.dev/ts/tailwind/Backgrounds/DotGrid"
)

foreach ($url in $urls) {
  npx -y jsrepo add $url --yes
}
