import * as React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { Purchase, serviceList } from "../helpers/integrations";
import { serviceConfig } from "../helpers/integrations";
import {MouseEvent} from "react";

interface PieCardProps {
    data: Purchase[];
}

export default function PieCard(props: PieCardProps) {

    const [selected, setSelected] = React.useState<number | undefined>(0);
    const [hovered, setHovered] = React.useState<number | undefined>(undefined);

    const data = props.data.map((entry, i) => {
        if (hovered === i) {
            return {
                ...entry,
                color: 'grey',
            };
        }
        return entry;
    });

    function consolidateData() {
        const consolidatedData = serviceList.map(service => {
            let totalCost = 0
            data.forEach(purchase => {
                if (purchase.companyName == service.name) {
                    totalCost += purchase.totalCost
                }
            })
            return {title: service.name, value: totalCost, color: serviceConfig[service.name]}
        }).filter(entry => entry.value > 0)
        return consolidatedData
    }

    return (
        <div>
            <PieChart
                labelStyle={{
                    fontSize: "5px",
                    fill: "#000"
                }}
                labelPosition={63}
                lineWidth={20}
                label={({ dataEntry }) =>
                    dataEntry.title
                }
                data={consolidateData()}
                onClick={(event, index) => {
                    setSelected(index === selected ? undefined : index);
                }}
                onMouseOver={(_, index) => {
                    setHovered(index);
                }}
                onMouseOut={() => {
                    setHovered(undefined);
                }}
            />
           <div style={{textAlign: "center"}}>{data[0].category}</div>
        </div>
    );
}
