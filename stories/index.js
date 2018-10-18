import React from "react"
import { storiesOf } from "@storybook/react"
import styles from "@sambego/storybook-styles"
const delay = (time, cb) => setTimeout(cb, time)
import Button from "../src/components/button"
import { action } from "@storybook/addon-actions"
import {
  Loading,
  NoData,
  Category,
  FeedbackModal,
  SwitchTab
} from "../src/components"
import NO_DATA_ORDER_LIST from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import NO_DATA_FAVORITE from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import NO_DATA_GAME_LIST from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import BET_FAILED from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import GAME_EXPIRED from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import INSUFFICIENT_BALANCE from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import SUCCESSFULLY_ORDERED from "https://avatars3.githubusercontent.com/u/17559536?s=40&v=4"
import { dataSets } from "../src/fakeData/category"

// order
import { OrderCard, OrderLabelCard, OrderFilter } from "../src/components/order"
// bet
import BetButton from "../src/components/betButton"
import BetButtonCell from "../src/components/betButtonCell"
import BetMatchInfo from "../src/components/betMatchInfo"
import { ProgressText, BetMatchCell } from "../src/components/betMatchCell"
import BefoeMatchCellGrooup from "../src/components/befoeMatchCellGrooup"
import {
  Label,
  LeftTitle,
  LabelRight,
  LabelCenter
} from "../src/components/label"
import BetMatchGroup from "../src/components/betMatchGroup"
import OtherMatch from "../src/components/otherMatch"
import {
  Panel as AccordionPanel,
  Accordion,
  MatchDetailPanel
} from "../src/components/accordion"
import GameTypeTitle from "../src/components/gameTypeTitle"
import {
  LiveNum,
  ChoosePlay,
  MatchListTitle,
  GamePlayModule,
  GameTypeList
} from "../src/components/matchListTitle"
import MatchDetailHeader from "../src/components/matchDetailHeader"
import Keyboard from "../src/components/keyboard"
import { BetInfo, BetInput, BetModule } from "../src/components/betInputInfo"
const Panel = OrderFilter.Panel
const Card = OrderLabelCard.Card
const Item = OrderCard.Item
const baseketball = require("../src/assets/game/index/basketball.png")
const baseketballActive = require("../src/assets/game/index/basketballActive.png")
const soccer = require("../src/assets/game/index/Soccer.png")
const soccerActive = require("../src/assets/game/index/SoccerActive.png")

const storyHDstyles = {
  display: "flex",
  justifyContent: "center",
  width: "750px",
  height: "1244px",
  transform: "scale(0.5)",
  transformOrigin: "left top",
  border: "1px dashed #999",
  backgroundColor: "#162D49"
}
let showBetmodule = true
const handleCloseBetModule = () => {
  showBetmodule = false
}
const openBetModule = () => {
  this.showBetmodule = true
}
storiesOf("Button", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("template property", () => (
    <div>
      <Button />
    </div>
  ))
storiesOf("detail-page", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("有banner 详情页面", () => (
    <div style={{ padding: "0 20px" }}>
      <MatchDetailHeader
        prefixCls="default"
        leftText="NBA"
        centerText=""
        showVSIcon={true}
        showHappeningIcon={true}
        defaultActiveRightIconName="VSIcon" // VSIcon  happeningIcon
        activeRightIconName="" // VSIcon  happeningIcon
        handelVSIcon={() => {
          console.log("handelVSIcon")
        }}
        handelHappeningIcon={() => {
          console.log("handelHappeningIcon")
        }}
        handelBackIcon={() => {
          console.log("handelBackIcon")
        }}
      />
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
        </BetButtonCell>
      </MatchDetailPanel>
      <BetModule
        isShow={showBetmodule}
        handleCloseBetModule={handleCloseBetModule}
      >
        <BetInfo />
        <BetInput betDisabled={true} amount={0} />
        <Keyboard />
      </BetModule>
    </div>
  ))
  .addWithJSX("无banner 详情页面", () => (
    <div style={{ padding: "0 20px" }}>
      <MatchDetailHeader
        prefixCls="default"
        leftText="NBA"
        centerText=""
        showVSIcon={false}
        showHappeningIcon={false}
        handelVSIcon={() => {
          console.log("handelVSIcon")
        }}
        handelHappeningIcon={() => {
          console.log("handelHappeningIcon")
        }}
        handelBackIcon={() => {
          console.log("handelBackIcon")
        }}
      />
      <Label showTBBorder={true} prefixCls="match-detail">
        <LeftTitle
          prefixCls="match-detail"
          leftText=" Aug 18, 2018"
          gameTypeImgUrl=""
          gameTypeImgShow={false}
        />
        <LabelCenter />
        <LabelRight
          prefixCls="live-inplay"
          disabled={false}
          showIcon={true}
          iconType="shoucang"
          activeIconType="mycopy1"
        />
      </Label>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail" clickBetBtn={openBetModule}>
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
          <BetButton prefixCls="detail-large" />
        </BetButtonCell>
      </MatchDetailPanel>
      <BetModule
        isShow={showBetmodule}
        defaultChangeSp={true}
        defaultChangeHandcap={true}
        handleCloseBetModule={handleCloseBetModule}
      >
        <BetInfo defaultChangeHandle={true} />
        <BetInput betDisabled={true} amount={0} />
        <Keyboard />
      </BetModule>
    </div>
  ))
storiesOf("BetModule", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("投注详情页 自定义投注模块", () => (
    <BetModule
      isShow={showBetmodule}
      handleCloseBetModule={handleCloseBetModule}
      sp={"2.7"}
      allAmount={"23423423.34"}
      fillAmount={"300000"}
      maskClosable={true}
      handleBet={betInfo => {
        console.log("handleBet---module", betInfo)
      }}
      focusInput={() => {
        console.log("focusInput---module")
      }}
      handleKeyboardChange={value => {
        console.log("focusInput---module", value)
      }}
    >
      <BetInfo />
      <BetInput betDisabled={true} amount={0} />
      <Keyboard />
    </BetModule>
  ))
storiesOf("BetInput", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("输入框", () => (
    <BetInput
      perfixCls={"default"}
      betAmount={"0"}
      amountSuffix={"EUR"}
      possibleWin={"345,678"}
      allAmount={"0"}
      fillAmount={"0"}
      betDisabled={false}
      fillInDisabled={false}
      allInDisabled={false}
      btnActive={false}
      isFillInActive={false}
      isAllInActive={false}
      isBetBtnActive={false}
      handleAllin={() => {
        console.log("handleAllin---")
      }}
      handleFillin={() => {
        console.log("handleFillin---")
      }}
      handleBet={betInfo => {
        console.log("handleBet---", betInfo)
      }}
      focusInput={() => {
        console.log("focusInput---")
      }}
      handleInputChange={value => {
        console.log("handleInputChange---", value)
      }}
    />
  ))

storiesOf("BetInfo", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("无变赔变盘", () => (
    <BetInfo
      optionName={"Royal Pari FC"}
      sp={2.7}
      defaultChangeSp={false}
      optionId={"s"}
      playId={"spf"}
      gamePlay={"Result 1X2"}
      gameAgainst={"Royal Pari FC  VS  Nacional Potosi"}
      handleDelete={() => {
        console.log("handleDelete")
      }}
    />
  ))
  .addWithJSX("变赔", () => (
    <BetInfo
      optionName={"Royal Pari FC"}
      sp={2.7}
      defaultChangeSp={true}
      optionId={"s"}
      playId={"spf"}
      gamePlay={"Result 1X2"}
      gameAgainst={"Royal Pari FC  VS  Nacional Potosi"}
      handleDelete={() => {
        console.log("handleDelete")
      }}
    />
  ))
storiesOf("Keyboard", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("自定义键盘", () => (
    <div>
      <Keyboard
        defaultValue="0"
        value=""
        isShow={true}
        handleChange={value => {
          console.log(value)
        }}
      />
    </div>
  ))
storiesOf("MatchDetailHeader", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("滚球详情页面header", () => (
    <MatchDetailHeader
      prefixCls="default"
      leftText="NBA"
      centerText=""
      showVSIcon={true}
      showHappeningIcon={true}
      defaultActiveRightIconName="VSIcon" // VSIcon  happeningIcon
      activeRightIconName="" // VSIcon  happeningIcon
      handelVSIcon={() => {
        console.log("handelVSIcon")
      }}
      handelHappeningIcon={() => {
        console.log("handelHappeningIcon")
      }}
      handelBackIcon={() => {
        console.log("handelBackIcon")
      }}
    />
  ))
  .addWithJSX("非滚球详情页面header", () => (
    <MatchDetailHeader
      prefixCls="default"
      leftText="NBA"
      centerText=""
      showVSIcon={false}
      showHappeningIcon={false}
      defaultActiveRightIconName="VSIcon" // VSIcon  happeningIcon
      activeRightIconName="" // VSIcon  happeningIcon
      handelVSIcon={() => {
        console.log("handelVSIcon")
      }}
      handelHappeningIcon={() => {
        console.log("handelHappeningIcon")
      }}
      handelBackIcon={() => {
        console.log("handelBackIcon")
      }}
    />
  ))

storiesOf("GameTypeTitle", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("滚球列表页足篮球切换", () => (
    <GameTypeTitle
      defaultActiveKey="Soccer"
      gamaTypeArr={[
        {
          imgUrl: soccer,
          activeImgUrl: soccerActive,
          gameTypeText: "Soccer (22)",
          key: "Soccer"
        },
        {
          imgUrl: baseketball,
          activeImgUrl: baseketballActive,
          gameTypeText: "Basketball (22)",
          key: "Basketball"
        }
      ]}
    />
  ))

storiesOf("game-list-page", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("滚球页面", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <GameTypeTitle
        defaultActiveKey="Soccer"
        gamaTypeArr={[
          {
            imgUrl: soccer,
            activeImgUrl: soccerActive,
            gameTypeText: "Soccer (22)",
            key: "Soccer"
          },
          {
            imgUrl: baseketball,
            activeImgUrl: baseketballActive,
            gameTypeText: "Basketball (22)",
            key: "Basketball"
          }
        ]}
      />
      <MatchListTitle prefixCls="inplay">
        <ChoosePlay />
        <LabelRight arrayText={[1, "x", 2]} />
        <GamePlayModule>
          <GameTypeList />
        </GamePlayModule>
      </MatchListTitle>
      <Accordion
        prefixCls="default"
        defaultActiveKey="basket"
        activeKeyId="basket"
        accordion={true}
      >
        <AccordionPanel
          prefixCls="default"
          keyId="basket"
          activeKeyId="basket"
          titleText="Primera división de Liga"
        >
          <BetMatchGroup>
            <BetMatchCell
              prefixCls={"push-inplay"}
              clickBetBtn={() => {
                console.log("test12")
              }}
            >
              <BetMatchInfo />

              <BetButtonCell prefixCls={"push-inplay"}>
                <BetButton />
                <BetButton />
                <BetButton />
              </BetButtonCell>
            </BetMatchCell>
          </BetMatchGroup>
        </AccordionPanel>
        <AccordionPanel
          prefixCls="default"
          keyId="footerball"
          titleText="Primera división de Liga"
        >
          <BetMatchGroup>
            <BetMatchCell
              prefixCls={"push-inplay"}
              clickBetBtn={() => {
                console.log("test12")
              }}
            >
              <BetMatchInfo />

              <BetButtonCell prefixCls={"push-inplay"}>
                <BetButton />
                <BetButton />
                <BetButton />
              </BetButtonCell>
            </BetMatchCell>
          </BetMatchGroup>
        </AccordionPanel>
      </Accordion>
    </div>
  ))
  .addWithJSX("非滚球足篮球", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <MatchListTitle>
        <LeftTitle prefixCls="default" leftText={"Soccer"} />
        <ChoosePlay />
        <LiveNum />
        <GamePlayModule>
          <GameTypeList />
        </GamePlayModule>
      </MatchListTitle>
      <Accordion>
        <AccordionPanel>
          <BetMatchGroup>
            <BefoeMatchCellGrooup>
              <Label prefixCls="push-before">
                <LeftTitle
                  gameTypeImgShow={false}
                  gameTypeBGShow={false}
                  leftText={"Today"}
                />
                <LabelRight arrayText={[1, "x", 2]} />
              </Label>
              <BetMatchCell
                prefixCls={"push-before"}
                clickBetBtn={() => {
                  console.log("test12")
                }}
              >
                <BetMatchInfo
                  homeScore=""
                  awayScore=""
                  isLive={false}
                  time={`4th set 10'`}
                />
                <BetButtonCell prefixCls={"push-before"}>
                  <BetButton />
                  <BetButton />
                  <BetButton />
                </BetButtonCell>
              </BetMatchCell>
            </BefoeMatchCellGrooup>
          </BetMatchGroup>
        </AccordionPanel>
      </Accordion>
    </div>
  ))
  .addWithJSX("非滚球非足篮球", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <Label showTBBorder={true}>
        <LeftTitle leftText="Horse Racing" />
      </Label>
      <BetMatchGroup>
        <BetMatchCell
          prefixCls={"push-inplay"}
          clickBetBtn={() => {
            console.log("test12")
          }}
        >
          <BetMatchInfo homeScore="" awayScore="" isLive={false} />
          <ProgressText stringInTime="" text="Bet Now" />
        </BetMatchCell>
        <BetMatchCell
          prefixCls={"push-inplay"}
          clickBetBtn={() => {
            console.log("test12")
          }}
        >
          <BetMatchInfo homeScore="" awayScore="" isLive={false} />
          <ProgressText stringInTime="" text="Bet Now" />
        </BetMatchCell>
        <BetMatchCell
          prefixCls={"push-inplay"}
          clickBetBtn={() => {
            console.log("test12")
          }}
        >
          <BetMatchInfo homeScore="" awayScore="" isLive={false} />
          <ProgressText stringInTime="" text="Bet Now" />
        </BetMatchCell>
      </BetMatchGroup>
    </div>
  ))

storiesOf("MatchListTitle", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("非滚球足篮球", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <MatchListTitle>
        <LeftTitle prefixCls="default" leftText={"Soccer"} />
        <ChoosePlay />
        <LiveNum />
        <GamePlayModule>
          <GameTypeList />
        </GamePlayModule>
      </MatchListTitle>
    </div>
  ))
  .addWithJSX("滚球", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <MatchListTitle prefixCls="inplay">
        <ChoosePlay />
        <LabelRight arrayText={[1, "x", 2]} />
        <GamePlayModule>
          <GameTypeList />
        </GamePlayModule>
      </MatchListTitle>
    </div>
  ))
  .addWithJSX("非滚球非足篮球", () => (
    <div style={{ height: "100%", width: "100%" }}>
      <MatchListTitle prefixCls="inplay">
        <LeftTitle prefixCls="default" leftText={"Soccer"} />
        <ChoosePlay />
        <GamePlayModule>
          <GameTypeList />
        </GamePlayModule>
      </MatchListTitle>
    </div>
  ))

storiesOf("AccordionPanel", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("游戏详情手风琴 （根据key折叠）", () => (
    <Accordion prefixCls="default" activeKeyId="small" accordion={true}>
      <MatchDetailPanel keyId="small" titleText="Primera división de Liga">
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel keyId="medium" titleText="Primera división de Liga">
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel keyId="large" titleText="Primera división de Liga">
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-large" />
        </BetButtonCell>
      </MatchDetailPanel>
    </Accordion>
  ))
  .addWithJSX("游戏详情手风琴 （非根据key折叠）", () => (
    <Accordion
      prefixCls="default"
      defaultActiveKey="basket"
      activeKeyId="basket"
      accordion={false}
    >
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
          <BetButton prefixCls="detail-small" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-medium" />
          <BetButton prefixCls="detail-medium" />
        </BetButtonCell>
      </MatchDetailPanel>
      <MatchDetailPanel>
        <BetButtonCell prefixCls="detail">
          <BetButton prefixCls="detail-large" />
        </BetButtonCell>
      </MatchDetailPanel>
    </Accordion>
  ))
  .addWithJSX("游戏列表手风琴 （根据key折叠）", () => (
    <Accordion
      prefixCls="default"
      defaultActiveKey="basket"
      activeKeyId="basket"
      accordion={true}
    >
      <AccordionPanel
        prefixCls="default"
        keyId="basket"
        activeKeyId="basket"
        titleText="Primera división de Liga"
      >
        <BetMatchGroup>
          <BetMatchCell
            prefixCls={"push-inplay"}
            clickBetBtn={() => {
              console.log("test12")
            }}
          >
            <BetMatchInfo />

            <BetButtonCell prefixCls={"push-inplay"}>
              <BetButton />
              <BetButton />
              <BetButton />
            </BetButtonCell>
          </BetMatchCell>
        </BetMatchGroup>
      </AccordionPanel>
      <AccordionPanel
        prefixCls="default"
        keyId="footerball"
        titleText="Primera división de Liga"
      >
        <BetMatchGroup>
          <BetMatchCell
            prefixCls={"push-inplay"}
            clickBetBtn={() => {
              console.log("test12")
            }}
          >
            <BetMatchInfo />

            <BetButtonCell prefixCls={"push-inplay"}>
              <BetButton />
              <BetButton />
              <BetButton />
            </BetButtonCell>
          </BetMatchCell>
        </BetMatchGroup>
      </AccordionPanel>
    </Accordion>
  ))
  .addWithJSX("游戏列表手风琴 （非根据key折叠）", () => (
    <Accordion
      prefixCls="default"
      defaultActiveKey="basket"
      activeKeyId="basket"
      accordion={false}
    >
      <AccordionPanel
        prefixCls="default"
        keyId="basket"
        activeKeyId="basket"
        titleText="Primera división de Liga"
      >
        <BetMatchGroup>
          <BetMatchCell
            prefixCls={"push-inplay"}
            clickBetBtn={() => {
              console.log("test12")
            }}
          >
            <BetMatchInfo />

            <BetButtonCell prefixCls={"push-inplay"}>
              <BetButton />
              <BetButton />
              <BetButton />
            </BetButtonCell>
          </BetMatchCell>
        </BetMatchGroup>
      </AccordionPanel>
      <AccordionPanel
        prefixCls="default"
        keyId="footerball"
        titleText="Primera división de Liga"
      >
        <BetMatchGroup>
          <BetMatchCell
            prefixCls={"push-inplay"}
            clickBetBtn={() => {
              console.log("test12")
            }}
          >
            <BetMatchInfo />

            <BetButtonCell prefixCls={"push-inplay"}>
              <BetButton />
              <BetButton />
              <BetButton />
            </BetButtonCell>
          </BetMatchCell>
        </BetMatchGroup>
      </AccordionPanel>
    </Accordion>
  ))

storiesOf("game-index-page", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("首页", () => (
    <div>
      <Label showTBBorder={true}>
        <LeftTitle gameTypeBGShow={false} prefixCls="live-inplay" />
        <LabelRight
          prefixCls="live-inplay"
          showIcon={true}
          iconType="mycopy2"
          rightText={5}
        />
      </Label>
      <BetMatchGroup>
        <Label>
          <LeftTitle
            leftText={"Soccer Highlights"}
            gameTypeBGShow={true}
            gameType="basketball"
          />
          <LabelRight arrayText={[1, "x", 2]} />
        </Label>
        <BetMatchCell
          prefixCls={"push-inplay"}
          clickBetBtn={() => {
            console.log("test12")
          }}
        >
          <BetMatchInfo />

          <BetButtonCell prefixCls={"push-inplay"}>
            <BetButton />
            <BetButton />
            <BetButton />
          </BetButtonCell>
        </BetMatchCell>
      </BetMatchGroup>
      <Button />

      <BetMatchGroup>
        <BefoeMatchCellGrooup>
          <Label prefixCls="push-before">
            <LeftTitle gameTypeBGShow={false} leftText={"Today"} />
            <LabelRight arrayText={[1, "x", 2]} />
          </Label>
          <BetMatchCell
            prefixCls={"push-before"}
            clickBetBtn={() => {
              console.log("test12")
            }}
          >
            <BetMatchInfo
              homeScore=""
              awayScore=""
              isLive={false}
              time={`4th set 10'`}
            />
            <BetButtonCell prefixCls={"push-before"}>
              <BetButton />
              <BetButton />
              <BetButton />
            </BetButtonCell>
          </BetMatchCell>
        </BefoeMatchCellGrooup>
      </BetMatchGroup>
      <Button />
      <BetMatchGroup>
        <Label showTBBorder={true}>
          <LeftTitle gameTypeBGShow={false} leftText={"Other Highlights"} />
        </Label>
        <OtherMatch>
          <Label prefixCls="other-match">
            <LeftTitle
              gameTypeBGShow={true}
              gameType="esport"
              leftText={"Other Highlights"}
            />
            <LabelRight showIcon={true} iconType="mycopy" />
          </Label>
          <Label prefixCls="other-match">
            <LeftTitle
              gameTypeBGShow={true}
              gameType="esport"
              leftText={"Other Highlights"}
            />
            <LabelRight showIcon={true} iconType="mycopy" />
          </Label>
          <Label prefixCls="other-match">
            <LeftTitle
              gameTypeBGShow={true}
              gameType="esport"
              leftText={"Other Highlights"}
            />
            <LabelRight showIcon={true} iconType="mycopy" />
          </Label>
        </OtherMatch>
      </BetMatchGroup>
    </div>
  ))
storiesOf("OtherMatch", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("其他比赛", () => (
    <OtherMatch>
      <Label prefixCls="other-match">
        <LeftTitle
          gameTypeBGShow={true}
          gameType="esport"
          leftText={"Other Highlights"}
        />
        <LabelRight showIcon={true} iconType="mycopy" />
      </Label>
      <Label prefixCls="other-match">
        <LeftTitle
          gameTypeBGShow={true}
          gameType="esport"
          leftText={"Other Highlights"}
        />
        <LabelRight showIcon={true} iconType="mycopy" />
      </Label>
      <Label prefixCls="other-match">
        <LeftTitle
          gameTypeBGShow={true}
          gameType="esport"
          leftText={"Other Highlights"}
        />
        <LabelRight showIcon={true} iconType="mycopy" />
      </Label>
    </OtherMatch>
  ))
storiesOf("Label", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("右边为数组的Label", () => (
    <Label>
      <LeftTitle
        leftText={"Soccer Highlights"}
        gameTypeBGShow={true}
        gameType="basketball"
      />
      <LabelRight arrayText={[1, "x", 2]} />
    </Label>
  ))
  .addWithJSX("左边图片Label", () => (
    <Label>
      <LeftTitle
        leftText={"Soccer Highlights"}
        gameTypeBGShow={true}
        gameType="basketball"
      />
    </Label>
  ))
  .addWithJSX("右边icon Label", () => (
    <Label>
      <LeftTitle
        gameTypeBGShow={true}
        gameType="esport"
        leftText={"Other Highlights"}
      />
      <LabelRight showIcon={true} iconType="mycopy" />
    </Label>
  ))
  .addWithJSX("右边 text+icon Label", () => (
    <Label showTBBorder={true}>
      <LeftTitle gameTypeBGShow={false} prefixCls="live-inplay" />
      <LabelRight
        prefixCls="live-inplay"
        showIcon={true}
        iconType="mycopy2"
        rightText={5}
      />
    </Label>
  ))
  .addWithJSX("游戏详情 label", () => (
    <Label showTBBorder={true} prefixCls="match-detail">
      <LeftTitle
        prefixCls="match-detail"
        leftText=" Aug 18, 2018"
        gameTypeImgUrl=""
        gameTypeImgShow={false}
      />
      <LabelCenter />
      <LabelRight
        prefixCls="live-inplay"
        disabled={false}
        showIcon={true}
        iconType="shoucang"
        activeIconType="mycopy1"
      />
    </Label>
  ))

storiesOf("BetMatchGroup", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐滚球BetMatchGroup", () => (
    <BetMatchGroup>
      <Label>
        <LeftTitle
          leftText={"Soccer Highlights"}
          gameTypeBGShow={true}
          gameType="basketball"
        />
        <LabelRight arrayText={[1, "x", 2]} />
      </Label>
      <BetMatchCell
        prefixCls={"push-inplay"}
        clickBetBtn={() => {
          console.log("test12")
        }}
      >
        <BetMatchInfo />

        <BetButtonCell prefixCls={"push-inplay"}>
          <BetButton />
          <BetButton />
          <BetButton />
        </BetButtonCell>
      </BetMatchCell>
    </BetMatchGroup>
  ))
  .addWithJSX("推荐非滚球BetMatchGroup", () => (
    <BetMatchGroup>
      <BefoeMatchCellGrooup>
        <Label prefixCls="push-before">
          <LeftTitle gameTypeBGShow={false} leftText={"Today"} />
          <LabelRight arrayText={[1, "x", 2]} />
        </Label>
        <BetMatchCell
          prefixCls={"push-before"}
          clickBetBtn={() => {
            console.log("test12")
          }}
        >
          <BetMatchInfo
            homeScore=""
            awayScore=""
            isLive={false}
            time={`4th set 10'`}
          />
          <BetButtonCell prefixCls={"push-before"}>
            <BetButton />
            <BetButton />
            <BetButton />
          </BetButtonCell>
        </BetMatchCell>
      </BefoeMatchCellGrooup>
    </BetMatchGroup>
  ))
  .addWithJSX("推荐其他比赛BetMatchGroup", () => (
    <BetMatchGroup>
      <Label showTBBorder={true}>
        <LeftTitle gameTypeBGShow={false} leftText={"Other Highlights"} />
      </Label>
      <OtherMatch>
        <Label prefixCls="other-match">
          <LeftTitle
            gameTypeBGShow={true}
            gameType="esport"
            leftText={"Other Highlights"}
          />
          <LabelRight showIcon={true} iconType="mycopy" />
        </Label>
        <Label prefixCls="other-match">
          <LeftTitle
            gameTypeBGShow={true}
            gameType="esport"
            leftText={"Other Highlights"}
          />
          <LabelRight showIcon={true} iconType="mycopy" />
        </Label>
        <Label prefixCls="other-match">
          <LeftTitle
            gameTypeBGShow={true}
            gameType="esport"
            leftText={"Other Highlights"}
          />
          <LabelRight showIcon={true} iconType="mycopy" />
        </Label>
      </OtherMatch>
    </BetMatchGroup>
  ))
storiesOf("befoeMatchCellGrooup", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐赛前MatchCellGrooup", () => (
    <BefoeMatchCellGrooup>
      <Label prefixCls="push-before">
        <LeftTitle gameTypeBGShow={false} leftText={"Today"} />
        <LabelRight arrayText={[1, "x", 2]} />
      </Label>
      <BetMatchCell
        prefixCls={"push-before"}
        clickBetBtn={() => {
          console.log("test12")
        }}
      >
        <BetMatchInfo
          homeScore=""
          awayScore=""
          isLive={false}
          time={`4th set 10'`}
        />
        <BetButtonCell prefixCls={"push-before"}>
          <BetButton />
          <BetButton />
          <BetButton />
        </BetButtonCell>
      </BetMatchCell>
    </BefoeMatchCellGrooup>
  ))

storiesOf("BetMatchCell", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐滚球BetMatchCell", () => (
    <BetMatchCell
      prefixCls={"push-inplay"}
      clickBetBtn={() => {
        console.log("test12")
      }}
    >
      <BetMatchInfo />
      <BetButtonCell prefixCls={"push-inplay"}>
        <BetButton />
        <BetButton />
        <BetButton />
      </BetButtonCell>
    </BetMatchCell>
  ))
  .addWithJSX("推荐赛前BetMatchCell", () => (
    <BetMatchCell
      prefixCls={"push-before"}
      clickBetBtn={() => {
        console.log("test12")
      }}
    >
      <BetMatchInfo
        homeScore=""
        awayScore=""
        isLive={false}
        time={`4th set 10'`}
      />
      <BetButtonCell prefixCls={"push-before"}>
        <BetButton />
        <BetButton />
        <BetButton />
      </BetButtonCell>
    </BetMatchCell>
  ))
  .addWithJSX("直接跳详情BetMatchCell", () => (
    <BetMatchCell
      clickBetBtn={() => {
        console.log("test12")
      }}
    >
      <BetMatchInfo
        homeScore=""
        awayScore=""
        isLive={false}
        time={`4th set 10'`}
      />
      <ProgressText
        handleClick={() => {}}
        stringInTime=""
        text="Bet Now"
        disabled={false}
      />
    </BetMatchCell>
  ))
  .addWithJSX("收藏的BetButtonCell", () => (
    <BetMatchCell
      clickBetBtn={() => {
        console.log("test12")
      }}
    >
      <BetMatchInfo
        homeScore=""
        awayScore=""
        isLive={false}
        time={`4th set 10'`}
      />
      <ProgressText />
    </BetMatchCell>
  ))

storiesOf("BetMatchInfo", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐滚球 BetButtonCell", () => (
    <BetMatchInfo
      homeName="Villacher Sv"
      awayName="Greifenburg"
      homeScore={12}
      awayScore={14}
      isLive={true}
      time="4th set 10'"
    />
  ))
  .addWithJSX("推荐赛前  BetButtonCell", () => (
    <BetMatchInfo
      homeName="Villacher Sv"
      awayName="Greifenburg"
      homeScore=""
      awayScore=""
      isLive={false}
      time="4th set 10'"
    />
  ))

storiesOf("BetButton", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐比赛列表的BetButton", () => (
    <BetButton
      disabled={false}
      optionId="w"
      defaultActive={false}
      handicap="4.5"
      sp={1.2}
      optionName="4.5"
      timeout={1000}
      stopTime={5000}
      clickBetBtn={params => {
        console.log(params)
      }}
      changeSp={() => {
        console.log("changeSp")
      }}
      changeHandicap={() => {
        console.log("changeHandicap")
      }}
    />
  ))
  .addWithJSX("游戏详情medium-BetButton", () => (
    <BetButton prefixCls="detail-medium" />
  ))
  .addWithJSX("游戏详情small-BetButton", () => (
    <BetButton prefixCls="detail-small" />
  ))
  .addWithJSX("游戏详情large-BetButton", () => (
    <BetButton prefixCls="detail-large" />
  ))
  .addWithJSX("推荐长条small-BetButton", () => (
    <BetButton prefixCls="push-small" />
  ))
  .addWithJSX("推荐长条large-BetButton", () => (
    <BetButton prefixCls="push-large" />
  ))
  .addWithJSX("推荐长条禁止-large", () => (
    <BetButton disabled={true} prefixCls="push-large" />
  ))

storiesOf("BetButtonCell", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("推荐列表 BetButtonCell", () => (
    <BetButtonCell>
      <BetButton />
      <BetButton />
      <BetButton />
    </BetButtonCell>
  ))
  .addWithJSX("游戏详情 BetButtonCell medium", () => (
    <BetButtonCell
      clickBetBtn={betInfo => {
        console.log(betInfo)
      }}
      changeSp={() => {
        console.log("changeSp")
      }}
      changeHandicap={() => {
        console.log("changeHandicap")
      }}
    >
      <BetButton prefixCls="detail-medium" />
      <BetButton prefixCls="detail-medium" />
    </BetButtonCell>
  ))
  .addWithJSX("游戏详情 BetButtonCell small", () => (
    <BetButtonCell>
      <BetButton prefixCls="detail-small" />
      <BetButton prefixCls="detail-small" />
      <BetButton prefixCls="detail-small" />
    </BetButtonCell>
  ))
  .addWithJSX("游戏详情 BetButtonCell large", () => (
    <BetButtonCell>
      <BetButton prefixCls="detail-large" />
    </BetButtonCell>
  ))
  .addWithJSX("推送长条 BetButtonCell small", () => (
    <BetButtonCell>
      <BetButton prefixCls="push-small" />
      <BetButton prefixCls="push-small" />
      <BetButton prefixCls="push-small" />
    </BetButtonCell>
  ))
  .addWithJSX("推送长条 BetButtonCell large", () => (
    <BetButtonCell>
      <BetButton prefixCls="push-large" />
      <BetButton prefixCls="push-large" />
    </BetButtonCell>
  ))

storiesOf("Loading", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("加载中", () => <Loading />)

storiesOf("FeedbackModal", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("BetFailedModal", () => (
    <FeedbackModal
      showCloseIcon
      logo={BET_FAILED}
      texts={["Opps, Your order is rejected."]}
      footerText="Try again"
      isOpen={true}
    />
  ))
  .addWithJSX("GameExpiredModal", () => (
    <FeedbackModal
      logo={GAME_EXPIRED}
      texts={["There are no games for the moment."]}
      footerText="OK"
      isOpen={true}
    />
  ))
  .addWithJSX("InsufficientBalanceModal", () => (
    <FeedbackModal
      showCloseIcon
      logo={INSUFFICIENT_BALANCE}
      texts={["Insufficient balance,", "Please recharge first!"]}
      footerText="Deposit"
      isOpen={true}
    />
  ))
  .addWithJSX("SuccessfullyOrderedModal", () => (
    <FeedbackModal
      logo={SUCCESSFULLY_ORDERED}
      texts={["Your order is confirmed!"]}
      footerText="OK"
      isOpen={true}
    />
  ))

storiesOf("Category", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("比赛分类", () => <Category dataSets={dataSets} />)

storiesOf("SwitchTab", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("切换Tab", () => <SwitchTab />)

storiesOf("NoData", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("订单列表为空", () => (
    <NoData
      logo={NO_DATA_ORDER_LIST}
      texts={["No orders are available to meet your conditions."]}
    />
  ))
  .addWithJSX("收藏夹为空", () => (
    <NoData
      logo={NO_DATA_FAVORITE}
      texts={[
        "You have no favourite games.",
        "You can make games favourite by clicking a star",
        "in a game page."
      ]}
    />
  ))
  .addWithJSX("比赛列表为空", () => (
    <NoData
      logo={NO_DATA_GAME_LIST}
      texts={["No orders are available to meet your conditions."]}
    />
  ))

storiesOf("Order", module)
  .addDecorator(styles(storyHDstyles))
  .addWithJSX("订单筛选选项", () => (
    <OrderFilter
      onChange={v => {
        console.log(v)
      }}
      defaultActiveKey={["0", "2"]}
    >
      <Panel
        body={[
          { name: "Last 24 Hrs" },
          { name: "Last 48 Hrs" },
          { name: "Last 6 Mths" }
        ]}
      />
      <Panel
        body={[{ name: "All" }, { name: "Settled" }, { name: "Unsettled" }]}
      />
    </OrderFilter>
  ))
  .addWithJSX("订单列表", () => (
    <OrderLabelCard label={"Royal Pari FC 2.8"}>
      <Card>
        <Item extra={122} size="small">
          order:222
        </Item>
        <Item extra={122} size="small">
          order:222
        </Item>
        <Item size="small">order:222</Item>
      </Card>
      <Card>
        <Item extra={122} size="small">
          order:222
        </Item>
      </Card>
    </OrderLabelCard>
  ))
  .addWithJSX("订单详情", () => (
    <OrderCard label="Order information">
      <Item extra={"match"}>Royal Pari FC VS Nacional Potosi</Item>
      <Item extra={"Match Result"}>Market</Item>
    </OrderCard>
  ))
