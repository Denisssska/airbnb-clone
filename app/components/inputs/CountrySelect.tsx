'use client';
import Select from 'react-select'
import React from "react";
import useCountries from "@/hooks/useCountries";
import ReactCountryFlag from "react-country-flag";
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
    const {getAll} = useCountries();

    return (
        <div>
            <Select
                placeholder="Anywhere"
                isClearable
                options={getAll() as any}
                value={value as any}
                onChange={(newValue) => onChange(newValue as CountrySelectValue)}
                formatOptionLabel={(data) => {
                    return(
                        <div className="flex flex-row items-center gap-3">
                            <ReactCountryFlag
                                className="w-[1em] h-[1em]"
                                countryCode={data.value}
                                svg
                                aria-label={data.label}
                            />
                            <div>
                                {data.label},
                                <span className="text-neutral-500 ml-1"> {data.region}</span>
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
                        primary: '#636363',
                        primary25: '#ffe4e6'
                    }
                })}
            />
        </div>
    );
}

export default CountrySelect;