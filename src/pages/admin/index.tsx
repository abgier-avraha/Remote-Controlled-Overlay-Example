import {
  Avatar,
  Card,
  Container,
  Flex,
  Grid,
  Group,
  Input,
  Select,
  TextInput,
  Title,
  Text,
  Button,
} from "@mantine/core";
import { type NextPage } from "next";
import Head from "next/head";
import { forwardRef, Fragment, useEffect, useState } from "react";
import type { z } from "zod";
import { PointsEnum } from "../../server/api/schema";
import type { FixtureSchema } from "../../server/api/schema";
import { api } from "../../utils/api";
import { iso3166List } from "../../utils/iso3166";
import Image from "next/image";

// TODO: install Mantine
// TODO: split into sections
// TODO: replace all elements with Mantine components including layout

const Home: NextPage = () => {
  const fixtureFetcher = api.sync.get.useQuery();
  const fixturePusher = api.sync.push.useMutation();

  const [formState, setFormState] = useState<z.infer<typeof FixtureSchema>>({
    sets: [],
    players: [],
  });

  useEffect(() => {
    if (fixtureFetcher.data) {
      setFormState(fixtureFetcher.data);
    }
  }, [fixtureFetcher.data]);

  if (!fixtureFetcher.data) {
    return null;
  }

  return (
    <Fragment>
      <Head>
        <title>Tennis Overlay Client</title>
      </Head>
      <Container>
        <Flex direction="column" gap={16}>
          <Title order={1}>Admin Panel</Title>
          <Title order={2}>Players</Title>
          <Select
            label="Serving"
            data={[
              {
                label: "None",
                value: "",
              },
              {
                label: "Player 1",
                value: "0",
              },
              {
                label: "Player 2",
                value: "1",
              },
            ]}
            onChange={(v) => {
              setFormState((o) => {
                let value = undefined;
                if (v !== "" && v !== null) {
                  value = parseInt(v);
                }
                const updatedFixture = {
                  ...o,
                  servingPlayerIndex: value,
                };
                return updatedFixture;
              });
            }}
            value={
              formState.servingPlayerIndex !== undefined
                ? formState.servingPlayerIndex.toString()
                : ""
            }
          />
          <Grid>
            {formState.players.map((p, i) => (
              <Grid.Col key={i} span={6}>
                <Card shadow="sm" p="lg" radius="md" withBorder>
                  <Title order={3}>Player {i + 1}</Title>
                  <Select
                    searchable
                    label="Nationality"
                    data={iso3166List.map((n) => ({
                      label: n.name,
                      value: `https://flagcdn.com/w80/${n[
                        "alpha-2"
                      ].toLowerCase()}.png`,
                      image: `https://flagcdn.com/w80/${n[
                        "alpha-2"
                      ].toLowerCase()}.png`,
                    }))}
                    itemComponent={SelectItem}
                    value={p.flag}
                    onChange={(v) => {
                      setFormState((o) => {
                        if (v != null) {
                          const updatedPlayers = [...o.players];
                          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                          updatedPlayers[i]!.flag = v;
                          return {
                            ...o,
                            players: updatedPlayers,
                          };
                        }
                        return o;
                      });
                    }}
                  />
                  <TextInput
                    label="Name"
                    onChange={(e) => {
                      setFormState((o) => {
                        const updatedPlayers = [...o.players];
                        updatedPlayers[i] = { ...p, name: e.target.value };
                        console.log(updatedPlayers);
                        return { ...o, players: updatedPlayers };
                      });
                    }}
                    value={p.name}
                  />
                </Card>
              </Grid.Col>
            ))}
          </Grid>

          {formState.sets.map((s, setIndex) => (
            <div key={setIndex}>
              <h2>Set {setIndex + 1}</h2>
              <div>
                {s.games.map((g, gameIndex) => (
                  <div key={gameIndex}>
                    <h3>Game {gameIndex + 1}</h3>
                    <div>
                      Player 1:
                      <select
                        value={g.firstPlayerPoints}
                        onChange={(e) => {
                          setFormState((o) => {
                            const updatedGame = { ...g };
                            g.firstPlayerPoints = e.target.value as z.infer<
                              typeof PointsEnum
                            >;
                            const updatedSet = { ...s };
                            updatedSet.games[gameIndex] = updatedGame;
                            const updatedSets = [...o.sets];
                            updatedSets[setIndex] = updatedSet;
                            return { ...o, sets: updatedSets };
                          });
                        }}
                      >
                        <option value={PointsEnum.Values[0]}>
                          {PointsEnum.Values[0]}
                        </option>
                        <option value={PointsEnum.Values[15]}>
                          {PointsEnum.Values[15]}
                        </option>
                        <option value={PointsEnum.Values[30]}>
                          {PointsEnum.Values[30]}
                        </option>
                        <option value={PointsEnum.Values[40]}>
                          {PointsEnum.Values[40]}
                        </option>
                        <option value={PointsEnum.Values.AD}>
                          {PointsEnum.Values.AD}
                        </option>
                      </select>
                    </div>
                    <div>
                      Player 2:
                      <select
                        value={g.secondPlayerPoints}
                        onChange={(e) => {
                          setFormState((o) => {
                            const updatedGame = { ...g };
                            g.secondPlayerPoints = e.target.value as z.infer<
                              typeof PointsEnum
                            >;
                            const updatedSet = { ...s };
                            updatedSet.games[gameIndex] = updatedGame;
                            const updatedSets = [...o.sets];
                            updatedSets[setIndex] = updatedSet;
                            return { ...o, sets: updatedSets };
                          });
                        }}
                      >
                        <option value={PointsEnum.Values[0]}>
                          {PointsEnum.Values[0]}
                        </option>
                        <option value={PointsEnum.Values[15]}>
                          {PointsEnum.Values[15]}
                        </option>
                        <option value={PointsEnum.Values[30]}>
                          {PointsEnum.Values[30]}
                        </option>
                        <option value={PointsEnum.Values[40]}>
                          {PointsEnum.Values[40]}
                        </option>
                        <option value={PointsEnum.Values.AD}>
                          {PointsEnum.Values.AD}
                        </option>
                      </select>
                    </div>
                    <div>
                      Winner:{" "}
                      <select
                        value={g.winnerPlayerIndex}
                        onChange={(e) => {
                          setFormState((o) => {
                            const updatedGame = { ...g };
                            console.log(e.target.value);
                            const parsed = parseInt(e.target.value);
                            g.winnerPlayerIndex =
                              parsed === -1 ? undefined : parsed;
                            const updatedSet = { ...s };
                            updatedSet.games[gameIndex] = updatedGame;
                            const updatedSets = [...o.sets];
                            updatedSets[setIndex] = updatedSet;
                            return { ...o, sets: updatedSets };
                          });
                        }}
                      >
                        <option value={-1}>None</option>
                        <option value={0}>Player 1</option>
                        <option value={1}>Player 2</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Card
            shadow="lg"
            radius="md"
            withBorder
            style={{ position: "sticky", bottom: "20px" }}
          >
            <Flex justify="space-between" align="center">
              <Title order={4}>You have unsynced changes</Title>

              <Button
                onClick={() => {
                  void (async () => {
                    await fixturePusher.mutateAsync(formState);
                  })();
                }}
              >
                Sync Changes
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </Fragment>
  );
};

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Image
          alt="serving"
          width={25}
          height={20}
          style={{ objectFit: "contain" }}
          src={image}
        />
        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export default Home;
