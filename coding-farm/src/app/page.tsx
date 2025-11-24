// src/app/page.tsx
"use client";

import { useRef, useState } from "react";
import { SaveStartModal } from "@/components/SaveStartModal/SaveStartModal";
import { useAlert } from "@/components/AlertProvider";
import { useConfirm } from "@/components/ConfirmProvider";
import { initGame } from "./game/initGame";
import Script from "next/script";
import { useConsole } from "@/components/Console/Console";

import HeaderBar from "@/components/Header/Header";
import { UnlockTree } from "@/components/Unlock/UnlockTree";
import { initMain } from "./game/initMain";
import { UiBridge } from "./game/types";

export default function HomePage() {
  const appRef = useRef<any | null>(null);
  const alert = useAlert();
  const confirm = useConfirm();

  const consoleApi = useConsole();

  const [showTech, setShowTech] = useState(false);

  const [appReady, setAppReady] = useState(0);

  const [msg, setMsg] = useState("...");
  const [slotName, setSlotName] = useState("未使用存档");
  const [inventory, setInventory] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const ui: UiBridge = {
    alert,
    confirm,

    setMsg: (m) => setMsg(m),

    updateInventory: (inv) => {
      setInventory(
        `草料(${inv.hay}) 木材(${inv.wood}) 胡萝卜(${inv.carrot}) 南瓜(${inv.pumpkin}) 仙人掌(${inv.cactus}) 金币(${inv.gold}) 苹果(${inv.apple}) 向日葵(${inv.sunflower}) 水(${inv.water}) 肥料(${inv.fertilizer})`
      );
    },

    updateSlotLabel: (name) => setSlotName(name),

    setRunState: (running) => setIsRunning(running),

    console: {
      log: consoleApi.log,
      system: consoleApi.system,
    },

    toggleUnlockTree: (show) => setShowUnlock(show),
  };

  const handleStartGame = async ({
    saveData,
    slotId,
    slotName,
  }: {
    saveData: any;
    slotId: number;
    slotName: string;
  }) => {
    // 真正启动游戏
    appRef.current = await initMain({
      saveData,
      slotId,
      slotName,
      ui: ui,
    });
    setAppReady((r) => r + 1);
  };

  // 以后 run / reset / save 都可以通过 appRef.current 调用
  // 比如将来：
  // const handleSave = () => appRef.current?.saveCurrentSlot?.();

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/ace-builds@1.32.0/src-min-noconflict/ace.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://cdn.jsdelivr.net/npm/ace-builds@1.32.0/src-noconflict/ext-language_tools.js"
        strategy="afterInteractive"
      />

      {/* 自定义标记：Ace 已经加载完成 */}
      <Script id="ace-ready" strategy="afterInteractive">
        {`window.__aceReady = true;`}
      </Script>

      {/* 启动 / 存档选择弹窗 */}
      <SaveStartModal onStartGame={handleStartGame} />

      <HeaderBar
        msg={msg}
        inventory={inventory}
        slotName={slotName}
        isRunning={isRunning}
        onRun={() => appRef.current?.runUserCode()}
        onAbort={() => appRef.current?.abortRun()}
        onReset={() => appRef.current?.resetGame()}
        onSave={() => appRef.current?.saveCurrentSlot()}
        onToggleTech={() => ui.toggleUnlockTree(true)}
      />

      <UnlockTree
        appRef={appRef}
        open={showTech}
        onClose={() => setShowTech(false)}
      />

      <div id="editor" />

      <div id="game">
        <canvas id="map" width={400} height={400} />
      </div>
    </>
  );
}
