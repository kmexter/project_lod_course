

# Path: pysubyt\commands.sh
#remove ./output/sediment_samples_sheet.ttl
#run command python -m pysubyt -t ./templates/ -i ./input/EMO_BON_Metadata_Soft_Sediment_BPNS_Belgium\ -\ sampling.csv -n lod_course_emobon.ttl -s col_md ./input/EMO\ BON\ logsheet\ metadata\ -\ For\ LOD\ project.csv -s emo_obs ./input/EMO_BON_Metadata_Soft_Sediment_BPNS_Belgium\ -\ observatory.csv -o ./output/sediment_samples_sheet.ttl
rm ./output/sediment_samples_sheet.ttl
python -m pysubyt -t ./templates/ -i ./input/EMO_BON_Metadata_Soft_Sediment_BPNS_Belgium\ -\ sampling.csv -n lod_course_emobon.ttl -s col_md ./input/EMO\ BON\ logsheet\ metadata\ -\ For\ LOD\ project.csv -s emo_obs ./input/EMO_BON_Metadata_Soft_Sediment_BPNS_Belgium\ -\ observatory.csv -o ./output/sediment_samples_sheet.ttl