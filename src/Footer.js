import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
    
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About</Heading>
			<FooterLink href="/about">About Us</FooterLink>
			<FooterLink href="/contact">Contact Us</FooterLink>
			<FooterLink href="/contact">Web Information</FooterLink>
			<FooterLink href="/home">Testimonials</FooterLink>
		</Column>
		<Column>
			<Heading>Resource</Heading>
			<FooterLink href="/feeUSercharges">Fees & User Charges</FooterLink>
			<FooterLink href="/actrulesandpolicies">Acts,Rules & Policies</FooterLink>
			<FooterLink href="/vehicledrivingtips">Public Guidelines</FooterLink>
			<FooterLink href="/trafficsigns">Traffic Guidelines</FooterLink>
		</Column>
		<Column>
			<Heading>Terms & Policies</Heading>
			<FooterLink href="/websitepolicies">Website Policies</FooterLink>
			<FooterLink href="/websitepolicies">HyperLink Policies</FooterLink>
			<FooterLink href="/contact">© RTO Management System | PG-DAC 2023</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
