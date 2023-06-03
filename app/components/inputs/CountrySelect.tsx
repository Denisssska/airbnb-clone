'use client';

import Select from 'react-select'
import React from "react";
import useCountries from "@/hooks/useCountries";

export type CountrySelectValue = {
    flag: string;
    label: string;
    latLng: number[],
    region: string;
    value: string
}

interface CountrySelectProps {
    value: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

const CountrySelect: React.FC<CountrySelectProps> = ({
                                                         value,
                                                         onChange
                                                     }) => {
    const {getAll,countries} = useCountries();
    console.log(getAll())
    console.log(countries)
    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll()}
                value={value}
                onChange={(newValue) => onChange(newValue as CountrySelectValue)}
                formatOptionLabel={(data,formatOptionLabelMeta) => {
                    console.log(formatOptionLabelMeta)
                    return(
                        <div className="
          flex flex-row items-center gap-3">
                            <div>{data.flag}</div>
                            <div>
                                {data.label},
                                <span className="text-neutral-500 ml-1">
                {data.region}
              </span>
                            </div>
                        </div>
                    )
                }}
                classNames={{
                    control: () => 'p-3 border-2',
                    input: () => 'text-lg',
                    option: () => 'text-lg'
                }}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 6,
                    colors: {
                        ...theme.colors,
                        primary: 'black',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
}

export default CountrySelect;