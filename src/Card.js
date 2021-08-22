import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardMedia from "@material-ui/core/CardMedia"
import { red } from "@material-ui/core/colors"
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}))

function CardComp(props) {
    const classes = useStyles()
    const { data } = props

    return (
        <div
            style={{
                marginBottom: "2vh",
                width: "fit-content",
                float: "left",
                marginRight: "20px",
            }}
        >
            <a href={data.url} style={{ textDecoration: "none" }}>
                <Card className={classes.root} style={{ width: "100%" }}>
                    <CardMedia
                        className={classes.media}
                        image={data.urlToImage}
                        // image={data.image}
                        title="image"
                    />
                    {/* <CardContent>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {data.title}
                        </Typography>
                    </CardContent> */}
                    <p className="card-text title">{data.title}</p>
                    <p className="card-text additional">{data.source.name}</p>
                    <p className="card-text additional">{data.publishedAt}</p>
                </Card>
            </a>
        </div>
    )
}

export default CardComp
