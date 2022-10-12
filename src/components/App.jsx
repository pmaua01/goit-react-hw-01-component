import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json";
import { Section } from "./Section/Section";
import { Profile } from "components/Profiles/Profile";
import { StatiscticList } from "./StatisticList/StatisticList";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
export const App = () => {
  // console.log(friends);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        color: "#010101",
      }}
    >
      <Profile user={user} />
      <Section title="Upload stats">
        <StatiscticList data={data} />
      </Section>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
