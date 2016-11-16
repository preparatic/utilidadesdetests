package com.preparatic.csvreaders;

import java.io.IOException;
import java.util.ArrayList;

public interface IExcel {

	void abrirExcel() throws IOException;

	ArrayList<PreguntaTest> getListaPreguntas();

}