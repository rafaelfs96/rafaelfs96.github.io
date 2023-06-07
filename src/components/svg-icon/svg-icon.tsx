import { useDynamicSvgImport } from "../../hooks/use-dynamic-svg-import"

type SvgIconProps = {
  iconName: string
  svgProp?: React.SVGProps<SVGAElement>
}

export function SvgIcon({ iconName, svgProp }: SvgIconProps) {
  const { loading, SvgIconEl } = useDynamicSvgImport(iconName)

  return (
    <>
      {loading && (<div>...</div>)}
      {SvgIconEl && (
        <SvgIconEl {...svgProp} />
      )}
    </>
  )
}