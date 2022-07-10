import React from 'react'

const MoneyItem = (props) => {
  return (
    <div className="character_box full_width">
      <div className="box_header">
        <div className="cut_corner_topLeft box_header_left">{props.title}</div>
        <div className="cut_corner_bottomRight box_header_right">
          <input
            className="character_input"
            type="text"
            spellCheck="false"
            autoComplete="off"
            autoCorrect="off"
            {...props.register(props.title)}
          />
        </div>
      </div>
    </div>
  )
}

export default MoneyItem