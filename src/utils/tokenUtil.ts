import jwt from 'jsonwebtoken'


const token={
    generateToken:(user)=>{
        return  jwt.sign({ user: user }, process.env.TOKEN_SECRET || '');
    }
}

export default  token