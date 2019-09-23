import React from "react";
import "./home.sass";
import { Link as RouterLink } from "react-router-dom";

//Components
import HomeCard from "./card";

//Mui
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Instagram from "@material-ui/icons/Instagram";
import Twitter from "@material-ui/icons/Twitter";

const cardInfo = [
  {
    img:
      "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/14-126-306-V50.jpg",
    header:
      "ASUS GeForce GTX 1660 Overclocked 6GB Phoenix Fan Edition HDMI DP DVI Graphics Card (PH-GTX1660-O6G)"
  },
  {
    img:
      "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/34-235-194-V01.jpg",
    header:
      "ASUS ROG Strix Hero III Gaming Laptop, 15.6 144 Hz IPS Type Full HD, NVIDIA GeForce RTX 2070, Intel Core i7-9750H, 16 GB ..."
  },
  {
    img:
      "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/20-231-472-05.jpg",
    header:
      "G.SKILL 8GB (2 x 4GB) 204-Pin DDR3 SO-DIMM DDR3 1600 (PC3 12800) Laptop Memory Model F3-12800CL9D-8GBSQ "
  },
  {
    img:
      "https://c1.neweggimages.com/NeweggImage/ProductImageCompressAll300/A7AB_1_201810031317879756.jpg",
    header:
      "Dell G5 15 Premium Gaming and Business Laptop (Intel 8th Gen i7-8750H Quad-Core, 32GB RAM, 1TB Sata SSD, 15.6 Full HD ..."
  }
];

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Typography variant="h6">Welcome</Typography>
          <Link href="#">
            <img alt="header" src="/images/header/1.jpg" />
          </Link>
        </div>
        <Grid container spacing={2} className="body">
          <Grid item sm={1} className="menu">
            <ul>
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/animations">Animations</RouterLink>
              </li>
              <li>
                <RouterLink to="/registration">Registration</RouterLink>
              </li>
            </ul>
          </Grid>
          <Grid item sm={11} className="content">
            <Grid container spacing={2}>
              {cardInfo.map((item, i) => (
                <Grid item sm={3} xs={12} className="cardcont">
                  <HomeCard img={item.img} header={item.header} key={i} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <div className="footer">
          <ul>
            <li>
              <a
                href="https://twitter.com/MediatedCub"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter{"  "}
                <Twitter />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/dounutfactory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{"  "}
                <Instagram />
              </a>
            </li>
            <li>
              <a
                href="https://twitch.tv/dounutfactory"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitch{"  "}
                <i class="fab fa-twitch"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
