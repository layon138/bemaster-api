import dayjs from 'dayjs' 

const date={
    generateDateNow:()=>{
        return dayjs().format()
    }
}

export default date