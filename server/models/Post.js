import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        pictureaPath: String,
        userPictureaPath: String,
        likes: {//all we need to do is to check if the userId exists in this map,values are always true
            //this is for who liked your post
            type: map,
            of: Boolean,
        },
        comments: {
            types: Array,
            default: []
        }
    },
    { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
