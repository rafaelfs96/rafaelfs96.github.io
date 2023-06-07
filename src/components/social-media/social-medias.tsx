import { socialMedias } from '../../utils/constants'
import { SvgIcon } from '../svg-icon'

export function SocialMedias() {
  return (
    <ul className="list-none h-full flex-grow w-4/5 md:w-1/2">
      {socialMedias.map(({ link, type }) => (
        <li className="mb-3 md:mb-5 hover:scale-105 transition-transform bg-slate-300 rounded-lg text-black h-14 flex px-2" key={type}>
          <a className="flex justify-between items-center w-full capitalize" href={link} target="_blank">
            <SvgIcon iconName={type} svgProp={{width: 40, height: 40}} />
            {type}
            <span className="w-[30px] md:w-[50px]"></span>
          </a>
        </li>
      ))}
    </ul>
  )
}