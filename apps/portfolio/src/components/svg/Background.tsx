const Background = () => (
  <svg
    className="min-h-full min-w-full absolute inset-0"
    preserveAspectRatio="xMidYMid slice"
    style={{ colorInterpolationFilters: 'linearRGB' }}
    viewBox="0 0 700 700"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        colorInterpolationFilters="linearRGB"
        filterUnits="objectBoundingBox"
        height="140%"
        id="background-filter"
        primitiveUnits="userSpaceOnUse"
        width="140%"
        x="-20%"
        y="-20%"
      >
        <feTurbulence
          baseFrequency=".062"
          height="100%"
          numOctaves="4"
          result="turbulence"
          seed="15"
          stitchTiles="stitch"
          type="fractalNoise"
          width="100%"
          x="0%"
          y="0%"
        />
        <feSpecularLighting
          height="100%"
          in="turbulence"
          lightingColor="var(--color-primary)"
          result="specularLighting"
          specularConstant=".7"
          specularExponent="20"
          surfaceScale="14"
          width="100%"
          x="0%"
          y="0%"
        >
          <feDistantLight azimuth="3" elevation="122" />
        </feSpecularLighting>
      </filter>
    </defs>
    <path d="M0 0h700v700H0z" fill="transparent" />
    <path
      d="M0 0h700v700H0z"
      fill="var(--color-primary)"
      filter="url(#background-filter)"
    />
  </svg>
);

export default Background;
