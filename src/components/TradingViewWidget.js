
import React from 'react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

const TradingViewWidget = ({ symbol }) => {
  return (
    <div style={{ height: "500px" }}>
      <AdvancedRealTimeChart
        theme="light"
        autosize
        symbol={symbol}
        interval="D"
        timezone="Etc/UTC"
        style="1"
        locale="ru"
        toolbar_bg="#f1f3f6"
        enable_publishing={false}
        allow_symbol_change={false}
        container_id="tradingview_chart_container"
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default TradingViewWidget;
