import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import factory from "../ethereum/factory";
import Layout from "../components/Layout";
import { Link } from "../routes";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  .card {
    transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      transform: scale(1.1);
    }
    & > content {
      background-color: black;
    }
  }
`;

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/campaigns/${address}`}>
            <a>View Campaign</a>
          </Link>
        ),
        fluid: true,
      };
    });

    return (
      <StyledCardWrapper>
        <Card.Group items={items} />
      </StyledCardWrapper>
    );
  }

  render() {
    return (
      <Layout>
        <div>
          <h3 style={{ color: "wheat", fontSize: "1.6rem" }}>Open Campaigns</h3>

          <Link route="/campaigns/new">
            <a>
              <Button
                floated="right"
                content="Create Campaign"
                icon="add circle"
                primary
              />
            </a>
          </Link>

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
