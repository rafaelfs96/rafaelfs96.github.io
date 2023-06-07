import { SvgIcon } from '../svg-icon'

export function Profile() {
  return (
    <div className="flex flex-col justify-center h-1/4 my-4">
      <div className="bg-slate-300 rounded-full flex justify-center items-center w-24 h-24 mb-2">
        <SvgIcon iconName="terminal" svgProp={{width: 80, height: 80}} />
      </div>
      <p className="text-center">@rafaelfs96</p>
    </div>
  )
}