import { UserCreateInterface } from "../../interfaces/user.interface";
import { registerUser,authUser } from "../../services/auth/auth.service";
import generatorToken from '../../utils/tokenUtil'


export const createUserController = async (req, res) => {
    try {
      let object = req.body as UserCreateInterface;
      await registerUser(object);
      res.json({
        message: "usuario creado",
        status: "success",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error al crear",
        status: "failed",
      });
    }
  };


  export const loginUserController = async (req, res) => {
    try {
      let object = req.body as UserCreateInterface;
      const result=await authUser(object);
      if (result) {
        res.json({
          message: "usuario encontrado",
          data:{
            user:result,
            token: generatorToken.generateToken(result),
          },
          status: "success",
        });
      } else {
        res.status(500).json({
          message: "usuario o contraseña incorrecta",
          status: "failed",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "error al crear",
        status: "failed",
      });
    }
  };



