import {
  CommentCreateInterface,
  CommentCreateRequestInterface,
  LikeCreateInterface,
  LikeCreateRequestInterface,
  VideoCreateInterface,
  VideoCreateRequestInterface,
} from "../../interfaces/video.interface";
import repository from "../../repostory/video/video.repository";
import dateUtil from "../../utils/date.util";
import generatorUtil from "../../utils/generatorIds.util";

export const registerVideo = async (video: VideoCreateRequestInterface) => {
  const videoToInsert: VideoCreateInterface = {
    ...video,
    dateCreated: dateUtil.generateDateNow(),
    commets: [],
    likes: [],
    id: generatorUtil.generateId(),
  };
  await repository.insert(videoToInsert);
};


export const registerCommentInVideo = async (video: CommentCreateRequestInterface) => {
  const videoToInsert: CommentCreateInterface = {
    ...video,
    dateCreated: dateUtil.generateDateNow(),
    id: generatorUtil.generateId(),
  };
  await repository.insertComment(videoToInsert);
};

export const registerLikeInVideo = async (video: LikeCreateRequestInterface) => {
  const likeToInsert: LikeCreateInterface = {
    ...video,
    dateCreated: dateUtil.generateDateNow(),
    id: generatorUtil.generateId(),
  };
  await repository.insertLike(likeToInsert);
};

export const listVideo = async (filter: any) => {
    const list = await repository.findByManyAtributes(filter);
    return list;
  };

export const listVideoPrivate = async (type: boolean) => {
  const list = await repository.findByAtribute("public", type);
  return list;
};
