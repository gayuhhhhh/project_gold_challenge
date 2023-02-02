import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
// import Typography from "react"





const Banner = () => {
    const [header, setHeader] = useState("Homepage");
    const [paragraph, setParagraph] = useState("Hellowww muddfuqqaaahhhhh tes tes 123 visca barca")

    return( 
    
			<section id="banner">
				<div className="inner">
					<h2>{header}</h2>
					<p>{paragraph}</p>
					<ul className="actions">
						<li><a href="#one" className="button big scrolly">Learn More</a></li>
					</ul>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                    Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                    Send
                    </Button>
				</div>
                {/* <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography> */}
			</section>
    )
   
};

export default Banner;