import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MovieCard({ title, year, image, crew, rank }) {
	// const changeIconButton = (button) => {
	// 	IconButton(button);

	// };

	const [isLiked, setLiked] = useState(false);
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader title={title} subheader={`Rank: ${rank}, ${year}`} />
			<CardMedia
				component="img"
				height="194"
				image={image}
				alt="Paella dish"
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{crew}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					aria-label="add to favorites"
					color={isLiked ? "error" : "success"}
					onClick={() => {
						setLiked((prev) => !prev);
					}}
				>
					<FavoriteIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}
