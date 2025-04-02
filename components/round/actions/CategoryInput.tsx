"use client";
import { WikimediaCategoryName } from "@/types";
import { Autocomplete, Button, CircularProgress, IconButton, List, ListItem, ListItemText, TextField } from "@mui/material";
import commons2Server from "@/public/commons2server.svg"
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";
import ImportIcon from "@/public/icons/ImportIcon";
import DeleteIcon from '@mui/icons-material/Delete';

interface CategoryInputProps {
    onSave: (categories: WikimediaCategoryName[]) => void;
    alreadyIncludedCategories: WikimediaCategoryName[];
    saving?: boolean;
}
type WikimediaCategory = {
    category: WikimediaCategoryName;
    size: number;
    pages: number;
    files: number;
    subcats: number;
}
const CategoryInput = ({ alreadyIncludedCategories, onSave, saving = false }: CategoryInputProps) => {
    const [addedSet, setAddedSet] = useState(new Set(alreadyIncludedCategories))
    const categories = [...addedSet].sort()
    const [prefix, setPrefix] = useState('')
    const replaced = prefix.replace(/^ *[Cc]ategory *:/i, '');
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=allcategories&formatversion=2&acprefix=${replaced}&origin=*&aclimit=10&acprop=size`
    const { data: categoryOptions, isLoading, error } = useSWR(replaced ? url : null, async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        return json.query.allcategories.map((category: WikimediaCategory) => category.category)
    })
    return (
        <div style={{ textAlign: 'center' }}>
            <Image src={commons2Server.src} alt={''} width={400} height={186} style={{ margin: 1, display: 'block', textAlign: 'center' }} />
            {error && <div>Failed to load</div>}
            <Autocomplete
                id="categories"
                options={categoryOptions || []}
                filterSelectedOptions
                value=''
                onError={(e) => console.error(e)}
                disabled={saving}
                loading={isLoading}
                onChange={(e, updatedUsers) => { if (updatedUsers) setAddedSet(new Set(addedSet.add(updatedUsers))); setPrefix(''); }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Categories (Without Category: prefix)"
                        placeholder="Category (without Category: prefix)"
                        helperText="Type to search for categories without Category: prefix"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                        disabled={saving}
                    />
                )}
            />
            <List>
                {categories.map((category, index) => (
                    <ListItem key={index}
                        secondaryAction={
                            <IconButton onClick={() => setAddedSet(new Set(categories.filter((c) => c !== category)))} color="error" disabled={saving}>
                                <DeleteIcon />
                            </IconButton>
                        }
                        sx={{ border: 1, borderColor: 'grey.300', borderRadius: 5, margin: 1, '&:hover': { backgroundColor: 'grey.100' }, backgroundColor: '#00669926' }
                        }
                    >
                        <ListItemText
                            primary={category}
                        />
                    </ListItem>
                ))}
            </List>
            <Button startIcon={<ImportIcon />} variant="contained" onClick={() => onSave(categories)} disabled={categories.length === 0 || saving}>
                {saving && <CircularProgress size={20} color="inherit" sx={{ display: saving ? 'inline-block' : 'none' }} />}
                Import
            </Button>
        </div>
    );
}

export default CategoryInput;