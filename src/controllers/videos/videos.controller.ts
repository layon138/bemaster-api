import { CommentCreateRequestInterface, VideoCreateRequestInterface } from "../../interfaces/video.interface";
import { listVideo, listVideoPrivate, registerCommentInVideo, registerLikeInVideo, registerVideo } from "../../services/video/video.service";



export const createVideoByUser = async (req, res) => {
  try {
/*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new Video By User.',
            schema: {
                      $titulo:"primer video segundo usuario",
          $description:"primera prueba",
          $url:"https://www.youtube.com/watch?v=497L4-LhvdM&t=348s",
          $credit:"b00d858a-45fb-4d8b-92b3-9ae2a3d0f46a",
          $public:true
            }
    } 
    */
    const object = req.body as VideoCreateRequestInterface;
    await registerVideo(object);
    res.status(200).json({
      message: "video agregado",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "no se guardo el video",
      status: "failed",
    });
  }

};

export const createCommentOnVideoByUser = async (req, res) => {
  /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new Comment in Video By User.',
            schema: {
                      $userId:"b00d858a-45fb-4d8b-92b3-9ae2a3d0f46a",
            $videoId:"ac68d9a7-a7d9-4d15-944b-40ae32c57b4c",
        $description:"commentario de emilia"
            }
    } 
    */
  try {
    const object = req.body as CommentCreateRequestInterface;
    await registerCommentInVideo(object);
    res.json({
      message: "commentario agregado",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "no se guardo el commentario",
      status: "failed",
    });
  }

};

export const createLikeOnVideoByUser = async (req, res) => {
    /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new Like in Video By User.',
            schema: {
                      $userId:"b00d858a-45fb-4d8b-92b3-9ae2a3d0f46a",
            $videoId:"ac68d9a7-a7d9-4d15-944b-40ae32c57b4c"
            }
    } 
    */
  try {
    const object = req.body as CommentCreateRequestInterface;
    await registerLikeInVideo(object);
    res.json({
      message: "like agregado",
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "no se guardo el like",
      status: "failed",
    });
  }

};


export const getAllVideoPublic = async (req, res) => {
  /*     
    #swagger.parameters['credit'] = { description: 'Usuario que quieras filtrar' }
    */
  try {
    let filter={
      public:true
    }
    for (const key in req.query) {
      filter={
        ...filter,
        [key]: req.query[key]
      }
    }
    const list=await listVideo(filter);
    res.json({
      data:list,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "No existen videos",
      status: "failed",
    });
  }
};

export const getAllVideoPrivate = async (req, res) => {
    /*     
    #swagger.parameters['credit'] = { description: 'Usuario que quieras filtrar los videos privados' }
    */
  try {
    let filter={
      public:false
    }
    for (const key in req.query) {
      filter={
        ...filter,
        [key]: req.query[key]
      }
    }
    const list=await listVideo(filter);
    res.json({
      data:list,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "No existen videos",
      status: "failed",
    });
  }


};

export const getAllVideoPublicPopulation = async (req, res) => {
  try {
    let filter={
      public:true
    }
    const list=(await listVideo(filter)).sort((a,b)=>{
        return   b.likes.length-a.likes.length;
    }).slice(0, 10);

    res.json({
      data:list,
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      message: "No existen videos",
      status: "failed",
    });
  }
};

