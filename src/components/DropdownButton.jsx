export function DropdownButton ({ isOpen, toggleDropdown }) {
  return (
    <div className='relative min-w-28' data-drop-menu='dropdown'>
      <div
        onClick={toggleDropdown}
        className={`select glass hover:shadow-sha duration-600 group z-10 flex min-h-8 cursor-pointer items-center justify-between rounded border-2 border-solid border-firstColor px-2 text-white transition-shadow hover:border-white hover:bg-firstColor ${isOpen ? 'shadow-shadowSelect border-[#f15a5c]' : ''}`}
        data-drop-menu='select'
      >
        <span
          data-drop-menu='selected'
          data-option=''
          className='selected text-firstColor group-hover:text-white'
        />
        <div
          className={`caret h-0 w-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-firstColor transition duration-300 group-hover:border-t-white ${isOpen ? 'rotate-180' : ''}`}
          data-drop-menu='caret'
        />
      </div>
      <ul
        className={`absolute left-1/2 top-9 z-30 flex w-full -translate-x-1/2 flex-col gap-0.5 rounded-md border border-solid px-2 py-2 text-center text-firstColor shadow-shadowBox transition duration-300 ${isOpen ? 'opacity-1 visible' : 'opacity-0 invisible'} bg-thirdColor`}
        data-drop-menu='menu'
      >
        <li
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
          data-drop-menu='option'
          data-option='Aprobada'
        >
          Aprobada
        </li>
        <li
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
          data-drop-menu='option'
          data-option='Cursando'
        >
          Cursando
        </li>
        <li
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
          data-drop-menu='option'
          data-option='Regular'
        >
          Regular
        </li>
        <li
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
          data-drop-menu='option'
          data-option='Recursar'
        >
          Recursar
        </li>
        <li
          className='box-border cursor-pointer rounded-md px-0.5 py-1 transition hover:bg-firstColor hover:text-white hover:shadow'
          data-drop-menu='option'
          data-option=''
        >
          Quitar
        </li>
      </ul>
    </div>
  )
}
