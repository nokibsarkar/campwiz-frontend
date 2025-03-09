"use client";
import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import useSWR from "swr";

type ImageInputProps = {
    value: string
    onChange: (url: string) => void
    label: string
    disabled?: boolean
    sx?: { [key: string]: unknown }
}
type WikimediaImage = {
    title: string
    url: string
}
const base = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=allimages&formatversion=2&aiprop=url&origin=*&aiprefix=`
const ImageInput = (props: ImageInputProps) => {
    const [inputValue, setInputValue] = useState<string>('');
    const fetcher = async (url: string): Promise<WikimediaImage[]> => {
        const response = await fetch(url);
        const data = await response.json();
        return data?.query.allimages ?? []
    }
    const { isLoading, data: options } = useSWR(inputValue === '' ? null : base + inputValue, fetcher, {
        onLoadingSlow(key, config) {
            console.log('loading slow', key, config)
        },
        revalidateOnFocus: false, revalidateOnReconnect: false,
    });
    return (
        <Autocomplete
            id={props.label}
            options={options || []}
            getOptionLabel={(option) => option.title}
            filterSelectedOptions
            value={options?.find((option) => option.url === props.value)}
            isOptionEqualToValue={(option, value) => option.url === value.url}
            onError={(e) => console.error(e)}
            disabled={props.disabled}
            loading={isLoading}
            onChange={(_, updatedUrl) => props.onChange(updatedUrl?.url || '')}
            sx={{ mb: 1, ...(props.sx || {}) }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    variant="outlined"
                    label={props.label}
                    placeholder={props.label}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            )}
        />
    );
}
export default ImageInput;