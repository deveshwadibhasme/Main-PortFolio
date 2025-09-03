import Bars from '../assets/illustrations/bars.png'

const BarsInPage = ({style}) => {
  return (
    <div className={`${style} h-70 w-10 absolute`}>
      <img className='w-full h-full' src={Bars} alt="Bars" />
    </div>
  )
}

export default BarsInPage