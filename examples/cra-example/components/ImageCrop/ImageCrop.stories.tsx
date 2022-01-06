import * as React from "react";
import { storiesOf } from "@storybook/react";
import Cropper from "react-web-simple-widgets/widgets/ImageCrop";
import getCroppedImg from "./cropImage";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const dogImg = 'https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000';

const DefaultExample = (props) => {

    const [crop, setCrop] = React.useState({ x: 0, y: 0 })
    const [rotation, setRotation] = React.useState(0)
    const [zoom, setZoom] = React.useState(1)
    const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null)
    const [croppedImage, setCroppedImage] = React.useState(null)

    const onCropComplete = React.useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const showCroppedImage = React.useCallback(async () => {
        try {
            const croppedImage = await getCroppedImg(
                dogImg,
                croppedAreaPixels,
                rotation
            )
            console.log('donee', { croppedImage })
            setCroppedImage(croppedImage)
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels, rotation])

    const onClose = React.useCallback(() => {
        setCroppedImage(null)
    }, [])

    return (
        <div>
            <div
                // className={classes.cropContainer}
            >
                {/* @ts-ignore */}
                <Cropper
                    image={dogImg}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={4 / 3}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <div
                // className={classes.controls}
            >
                <div
                    // className={classes.sliderContainer}
                >
                    <Typography
                        variant="overline"
                        // classes={{ root: classes.sliderLabel }}
                    >
                        Zoom
                    </Typography>
                    <Slider
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        aria-labelledby="Zoom"
                        // classes={{ root: classes.slider }}
                        // @ts-ignore
                        onChange={(e, zoom) => setZoom(zoom)}
                    />
                </div>
                <div
                    // className={classes.sliderContainer}
                >
                    <Typography
                        variant="overline"
                        // classes={{ root: classes.sliderLabel }}
                    >
                        Rotation
                    </Typography>
                    <Slider
                        value={rotation}
                        min={0}
                        max={360}
                        step={1}
                        aria-labelledby="Rotation"
                        // classes={{ root: classes.slider }}
                        // @ts-ignore
                        onChange={(e, rotation) => setRotation(rotation)}
                    />
                </div>
                <Button
                    onClick={showCroppedImage}
                    variant="contained"
                    color="primary"
                    // classes={{ root: classes.cropButton }}
                >
                    Show Result
                </Button>
            </div>
            {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
        </div>
    )
};

const PlaygroundExample = (props) => {

    return (
        <>
        </>
    );
};

storiesOf("ImageCrop", module)
    .add("Default", () => <DefaultExample />)
    .add("Playground", () => <PlaygroundExample />);
