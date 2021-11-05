import * as React from "react";
import { storiesOf } from "@storybook/react";
import useFilePicker from "react-web-simple-widgets/widgets/hooks/useFilePicker";

const UserFilePickerExample = () => {

    const [openFileSelector, { filesContent, loading, errors, plainFiles }] = useFilePicker({
        multiple: true,
        readAs: 'DataURL', // availible formats: "Text" | "BinaryString" | "ArrayBuffer" | "DataURL"
        // accept: '.ics,.pdf',
        accept: ['.png', '.jpeg'],
        limitFilesConfig: { min: 2, max: 3 },
        // minFileSize: 1, // in megabytes
        // maxFileSize: 1,
        // imageSizeRestrictions: {
        //   maxHeight: 1024, // in pixels
        //   maxWidth: 1024,
        //   minHeight: 768,
        //   minWidth: 768,
        // },
        // readFilesContent: false, // ignores file content,
        // validators: [customValidator],
    });

    if (errors.length) {
        return (
            <div>
                <button onClick={() => openFileSelector()}>Something went wrong, retry! </button>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {console.log(errors)}
                    {Object.entries(errors[0])
                        .filter(([key, value]) => key !== 'name' && value)
                        .map(([key]) => (
                            <div key={key}>{key}</div>
                        ))}
                </div>
            </div>
        );
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <button onClick={() => openFileSelector()}>Select file</button>
            <br />
            Number of selected files:
            {plainFiles.length}
            <br />
            {/* If readAs is set to DataURL, You can display an image */}
            {!!filesContent.length && <img src={filesContent[0].content} />}
            <br />
            {plainFiles.map(file => (
                <div key={file.name}>{file.name}</div>
            ))}
        </div>
    );
}

storiesOf("hooks/useFilePicker", module)
    .add("Default", () => {
        return (
            <UserFilePickerExample
            />
        )
    })
