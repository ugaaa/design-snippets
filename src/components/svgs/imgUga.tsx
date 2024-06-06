type ImgUgaProps = {
  width?: number | string,
  height?: number | string,
  color?: string,
  bgColor?: string
}

const ImgUga = ({
  width = 135,
  height = 155,
  color = 'currentColor',
  bgColor = 'white'
}: ImgUgaProps) => (
  <svg width={width} height={height} viewBox="0 0 135 155" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.2511 110.885C27.9384 139.573 39.3763 152.699 39.3763 152.699H90.9406C90.9406 152.699 86.0654 132.448 77.6276 119.885C77.6276 119.885 125.967 107.885 132.192 58.9456C137.225 19.3817 104.338 5.29681 72.3774 2.69365C37.2709 -0.165791 3 29.0066 3 66.0709C3 98.322 35.2511 110.885 35.2511 110.885Z" fill={bgColor}/>
    <path d="M39.3763 152.699C39.3763 152.699 27.9384 139.573 35.2511 110.885C35.2511 110.885 3 98.322 3 66.0709C3 29.0066 37.2709 -0.165791 72.3774 2.69365C104.338 5.29681 137.225 19.3817 132.192 58.9456C125.967 107.885 77.6276 119.885 77.6276 119.885C86.0654 132.448 90.9406 152.699 90.9406 152.699" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M38.4388 77.1342C64.4499 65.9367 80.1166 62.932 110.066 63.6337C110.414 65.2344 102.261 97.1267 85.3154 101.135C65.7652 105.759 38.4388 79.9468 38.4388 79.9468" stroke={color} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="31.3135" cy="55.0079" r="2.25008" fill={color} />
    <circle cx="107.441" cy="38.8829" r="2.25008" fill={color} />
  </svg>
)

export default ImgUga;