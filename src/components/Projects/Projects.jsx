import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import MGN1 from "../../Assets/Projects/MGN1.png";
import five from "../../Assets/Projects/five.png";
import Green1 from "../../Assets/Projects/Green1.png";
import DB1 from "../../Assets/Projects/DB1.png";
import Natural1 from "../../Assets/Projects/Natural1.png";
import Kuber1 from "../../Assets/Projects/Kuber1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Natural1}
              isBlog={false}
              title="Built a Website for Carpet Cleaning Services Using WordPress"
              description="Built a website for carpet cleaning services using WordPress that included a booking feature for customers to easily schedule appointments. Utilizing PageSpeed Insights, the website received a high performance rating of 97 and a speed index of 1.2s, ensuring fast loading times and a smooth user experience."
              ghLink="https://github.com/ScherreyDavid/Built-a-Website-for-Carpet-Cleaning-Services-Using-WordPress"
              demoLink="https://naturalecocarpetclean.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Green1}
              isBlog={false}
              title="Created a CICD Pipeline to Deploy app to AWS Fargate"
              description="I created a CI/CD pipeline to deploy my app to AWS Fargate using CodeCommit, CodeBuild, and CodeDeploy. I configured CodeCommit as a source control repository and created a CodeDeploy application and deployment group. I built a CI/CD pipeline that performed a blue/green deployment "
              ghLink="https://github.com/ScherreyDavid/Created-a-CICD-Pipeline-to-Deploy-app-to-AWS-Fargate"
              demoLink="https://youtu.be/FWAMvwwx_wk"              
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DB1}
              isBlog={false}
              title="Developed a Severless Web Application with Amazon DynamoDB"
              description="Built a serverless music application, I utilized Amazon DynamoDB, AWS Lambda, and Amazon API Gateway to build the application's backend, while hosting the front-end website on Amazon S3. The application allowed users to view and manage music albums in the database"
              ghLink="https://github.com/ScherreyDavid/Developed-a-Severless-Web-Application-with-Amazon-DynamoDB"
              demoLink="https://youtu.be/yqh7_3Yxlz0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Kuber1}
              isBlog={false}
              title="Built and Deployed a Containerized Application with Amazon Elastic Kubernetes Service"
              description="I built and deployed a containerized application using Amazon Elastic Kubernetes Service (Amazon EKS). I created an Amazon EKS cluster, prepared a Docker application and pushed it to an Amazon Elastic Container Registry (Amazon ECR) repository. I also deployed an AWS Load Balancer Controller and deployed the application into the Amazon EKS cluster. Finally, I configured and viewed Amazon CloudWatch Container Insights on the Kubernetes cluster"
              ghLink="https://github.com/ScherreyDavid/Built-and-Deployed-a-Containerized-Application-with-Amazon-Elastic-Kubernetes-Service"
              demoLink="https://youtu.be/jD8ppOtc9PM"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MGN1}
              isBlog={false}
              title="Migrated a Monolith Web Application to AWS using Application Migration Service (MGN)"
              description="I migrated a Monolithic Web Application to AWS using Application Migration Service (MGN). I re-hosted the application server on Amazon Elastic Compute Cloud (Amazon EC2) and re-platformed the database on Amazon Relational Database Service (Amazon RDS) using AWS Database Migration Service (AWS DMS). Finally, I tested the migrated application and verified that it was successfully migrated to AWS."
              ghLink="https://github.com/ScherreyDavid/Migrate-a-Monolith-Web-Application-to-AWS-using-Application-Migration-Service-MGN-"
              demoLink="https://youtu.be/E-7WmknI73w"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={five}
              isBlog={false}
              title="Designed and Implemented a Professional Site for a Service Business"
              description="I developed a cleaning services website with new offerings, specials, and an image gallery. I streamlined inquiries with a contact form and optimized the website for SEO. This modernized the business and improved its online presence, making it more accessible to potential customers."
              ghLink="https://github.com/ScherreyDavid/Designed-and-Implemented-a-Professional-Site-for-a-Service-Business"
              demoLink="https://5starclean.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
