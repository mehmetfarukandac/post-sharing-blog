import Input from "../common/input";
import TextArea from "../common/textArea";

const PostForm = ({
    inputOnChange,
    postValues
}) => {
    return (
        <>
            <div className="mb-4">
                <Input name="title" onChangeHandler={inputOnChange} value={postValues?.title} text="Title" />
            </div>
            <div className="mb-4">
                <TextArea name="body" onChangeHandler={inputOnChange} value={postValues?.body} placeholder="Write your thoughts here..." label="Detail" />
            </div>
        </>
    )
}
export default PostForm;