import React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

type EmailProps = {
  message: string;
  name: string;
  email: string;
};

export default function PortfolioEmail({ message, name, email }: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Message from your website</Preview>
      <Tailwind>
        <Body className="bg-[#f5f5f5] font-sans p-10">
          <Container>
            <Section>
              <Text className="text-sm">From: {name}</Text>
              <Text className="text-sm rounded-xl p-7 m-2 bg-white">
                Message:
                <br />
                {message}
              </Text>
              <Text className="text-sm">
                {`The sender's email`}: {email}{" "}
              </Text>
            </Section>
            <Hr className="border-[#cccccc] mt-5" />
            <Text className="text-[#8898aa] leading-7">
              10010 New York, New York
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
