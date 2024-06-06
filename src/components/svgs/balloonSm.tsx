type BalloonSmProps = {
  width?: number | string,
  height?: number | string,
  color?: string,
  bgColor?: string
}

const BalloonSm = ({
  width = 390,
  height = 376,
  color = '#FF5722',
  bgColor = 'white'
}: BalloonSmProps) => (
  <svg width={width} height={height} viewBox="0 0 390 376" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62.6079 111.857C24.5039 153.173 28.5098 216.801 61.9961 255.84C102.373 296.325 179.929 332.267 250.576 322.436C259.882 327.783 251.267 344.839 248.483 347.655C261.448 339.989 266.866 334.41 272.69 321.167C295.491 321.282 321.778 304.73 345.589 270.289C394.264 176.757 358.576 114.781 281.622 80.3227C204.568 45.82 117.654 59.9923 62.6079 111.857Z" fill={bgColor}/>
    <path d="M50.8062 107.038C12.7022 148.353 16.7082 211.981 50.1945 251.02C90.5709 291.506 168.127 327.448 238.775 317.617C248.081 322.964 239.465 340.019 236.681 342.835C249.646 335.169 255.064 329.59 260.888 316.347C283.69 316.462 309.976 299.91 333.787 265.47C382.462 171.937 346.774 109.961 269.82 75.5032C192.766 41.0004 105.852 55.1728 50.8062 107.038Z" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default BalloonSm;