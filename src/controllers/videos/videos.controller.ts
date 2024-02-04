import { VideoCreateRequestInterface } from "../../interfaces/video.interface";
import { listVideo, listVideoPrivate, registerVideo } from "../../services/video/video.service";

export const createVideoByUser = async (req, res) => {
  try {
    const object = req.body as VideoCreateRequestInterface;
    await registerVideo(object);
    res.json({
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

export const getAllVideoPublic = async (req, res) => {
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

