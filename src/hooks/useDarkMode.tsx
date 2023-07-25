import { useEffect, useState } from "react"

const useLocalStorage = (key:string, initVal:boolean) => {
    const [themeValue, setThemeValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        }catch(e){
            console.log(e)
            return initVal
        }
    })

    const setTheme = (value:Function) =>{
        try{
            const themeToStore = value instanceof Function ? value(themeValue) : value
            
            setThemeValue(themeToStore)

            window.localStorage.setItem(key,JSON.stringify(themeToStore))

        }catch(e){
            console.log(e)
        }
    }
    return [themeValue, setTheme]
}

const useDarkTheme = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme',false)
    const isEnabled = enabled;
    useEffect(()=>{
        const className = 'dark'
        const bodyClass = window.document.body.classList

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className)

    }, [enabled, setEnabled])
    return [enabled, setEnabled]
}

export default useDarkTheme