import { FiPlus, FiX } from 'react-icons/fi'
import { MemoItemContainer } from "./styles";
import React from 'react';

interface MemoItemProps extends React.InputHTMLAttributes<HTMLInputElement>{
  isNew?: boolean
  value?: string
  onClick?: () => void
}

export function MemoItem ({isNew, value, onClick, ...rest}:MemoItemProps) {
  return (
    <MemoItemContainer isNew={isNew}>
      <input 
        type="text" 
        value={value}
        readOnly={!isNew}
        {...rest}
      />
      <button 
        type='button'
        onClick={onClick}
        className={isNew? 'button-add' : 'button-delete'}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </MemoItemContainer>
  )
}