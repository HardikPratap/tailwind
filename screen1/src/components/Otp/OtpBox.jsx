import React from 'react'
import { useMemo,useState } from 'react';


function OtpBox({value,valueLength,onChange}) {
    const Regex_digit= /^\d+$/

    const valueItems = useMemo(()=>{
        const valueArr= value.split('')
        const items=[]

        for(let i=0; i<valueLength; i++){
            const char = valueArr[i]
            const isNumber = Regex_digit.test(char)
            items.push(isNumber ? char : "");
        }
        return items
    }, [value,valueLength])

    function focusToNext(target){
       const nextElementSibling =target.nextElementSibling;
       if(nextElementSibling){
        nextElementSibling.focus()
       } 
    }

    function focusToPrevious(target){
        const previousElementSibling= target.previousElementSibling
        if(previousElementSibling){
            previousElementSibling.focus()
        }
    }

    function inputOnChange(e,index){
        const target=e.target
        let targetValue= target.value
        const isNumber=Regex_digit.test(targetValue)
        
        if(!isNumber && targetValue !== ''){
            return
        }

       const newValue= value.substring(0,index)+(isNumber ? targetValue : '')+value.substring(index+1)
        onChange(newValue)

        if (isNumber) {
            focusToNext(target);
          }
    }

    const inputOnKeyDown = (e) => {
        const { key } = e;
        const target = e.target;
    
        if (key === 'ArrowRight' || key === 'ArrowDown') {
          e.preventDefault();
          focusToNextInput(target);
        } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
          e.preventDefault();
          focusToPrevious(target);
        } else if (key === 'Backspace' && target.value === '') {
          focusToPrevious(target);
        }
      };
    
      const inputOnFocus = (e) => {
        const { target } = e;
        const prevInputEl = target.previousElementSibling;
    
        if (prevInputEl && prevInputEl.value === '') {
          prevInputEl.focus();
        }
    
        target.setSelectionRange(0, target.value.length);
      };
  return (
    <div className='flex max-w-fit mx-auto gap-x-4'>
      {valueItems.map((digit, index) =>(
        <input type="text"
                key={index}
                inputMode='numeric'
                autoComplete='one-time-code'
                pattern='\d{1}'
                maxLength={1}
                value={digit}
                onChange={(e)=>inputOnChange(e,index)}
                onKeyDown={inputOnKeyDown}
                onFocus={inputOnFocus}
                className='w-12 mt-3 py-3 px-2 rounded-md text-center text-lg bg-input text-white'
        />
      ))}
    </div>
  )
}

export default OtpBox
