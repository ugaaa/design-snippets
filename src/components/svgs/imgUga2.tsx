type ImgUga2Props = {
  width?: number | string,
  height?: number | string,
  color?: string,
  bgColor?: string
}

const ImgUga2 = ({
  width = 372,
  height = 417,
  color = '#4CAF50',
  bgColor = 'white',
}: ImgUga2Props) => (
  <svg width={width} height={height} viewBox="0 0 372 417" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M112 305.016C92.5 381.516 123 416.516 123 416.516H260.5C260.5 416.516 247.5 362.516 225 329.016C225 329.016 353.899 297.016 370.5 166.516C383.921 61.0164 296.224 23.4579 211 16.5164C117.386 8.89147 26 86.6819 26 185.516C26 271.516 112 305.016 112 305.016Z" fill={bgColor}/>
    <path d="M103 406.516C103 406.516 72.5 371.516 92 295.016C92 295.016 5.99999 261.516 6 175.516C6.00001 76.6819 97.3859 -1.10853 191 6.51637C276.224 13.4579 363.921 51.0164 350.5 156.516C333.899 287.016 205 319.016 205 319.016C227.5 352.516 240.5 406.516 240.5 406.516" stroke={color} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M100.5 205.016C169.861 175.157 211.637 167.145 291.5 169.016C292.429 173.285 270.687 258.328 225.5 269.016C173.368 281.348 100.5 212.516 100.5 212.516" stroke={color} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="81.5" cy="146.016" r="6" fill={color}/>
    <circle cx="284.5" cy="103.016" r="6" fill={color}/>
  </svg>
)

export default ImgUga2;
