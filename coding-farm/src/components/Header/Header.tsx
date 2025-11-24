"use client";
import styles from "./Header.module.css";
export default function Header({
  msg,
  inventory,
  slotName,
  isRunning,
  onRun,
  onAbort,
  onReset,
  onSave,
  onToggleTech,
}) {
  return (
    <header className={styles.header}>
      <h1>编程农场开源版</h1>
      <span>{msg}</span>
      <span>🎒 {inventory}</span>
      <span>{slotName}</span>

      <button onClick={isRunning ? onAbort : onRun}>
        {isRunning ? "中止" : "运行"}
      </button>

      <button className="secondary" onClick={onReset}>
        重置
      </button>
      <button className="secondary" onClick={onSave}>
        保存
      </button>
      <button className="secondary" onClick={onToggleTech}>
        科技树
      </button>
    </header>
  );
}
