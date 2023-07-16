/**
 * 封装一个icon组件
 * 核心技术：父子通信=》复用最大化
 * 需求：
 * 1、传入icon名称，显示对应名称的图标
 * 2、传入一个callback回调，点击执行
 * 3、传入className类名，控制字体图标样式
 */

type Props = {
  type: string //图标名称
  onClick?: () => void //点击执行回调
  className?: string //类名
}

const Icon = ({ type, onClick, className = '' }: Props) => {
  return (
    <svg className={`icon ${className}`} aria-hidden="true">
      {/* 使用时，只需要将此处的 iconbtn_like_sel 替换为 icon 的名称即可*/}
      <use xlinkHref={`#${type}`}></use>
    </svg>
  )
}

export default Icon
