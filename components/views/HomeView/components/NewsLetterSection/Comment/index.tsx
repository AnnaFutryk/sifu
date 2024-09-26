import { ChangeEvent } from "react";
import cls from "../styles.module.scss";

interface CommentProps{
     values: {[key:string]:string};

  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const Comment = (props: CommentProps) => {
    const { handleChange, values } = props;
    
    return (
        <div className={cls.inputContainer}>
        <textarea
          className={cls.textarea}
          onChange={handleChange}
          id="comment"
          placeholder="Enter comment"
          name="comment"
          value={values.comment}
        />

      </div>
    )
}

export default Comment;