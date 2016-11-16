package com.preparatic.csvreaders;

import com.preparatic.ConfigProperties;

public class CSVReaderFactory {
	
	public static IExcel GetCSVReader() throws Exception{
		String source = ConfigProperties.getProperty("input.source");
		
		if (source.equalsIgnoreCase("google"))
			return new GoogleSheet();
		else if (source.equalsIgnoreCase("file"))
			return  new FicheroExcel();
		else
			throw new Exception("Wrong input source at config properties. Only google and file are implemented.");
	}
}
