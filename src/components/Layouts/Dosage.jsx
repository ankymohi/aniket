import React from "react";

const Dosage = () => {
  return (
    <>
      <div>
        <br></br>
        <div className="heading">
        <h4>Dosage instructions</h4>

        </div>
       

        <br></br>
        <div class="row justify-content-around">
          <div class="col-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label class="checkboxw" for="">
                Use the preset Dosage instructions
              </label>
            </div>
          </div>
          <div class="col-4">
            {" "}
            <div class="col-auto"></div>
          </div>
        </div>
        <br></br>
        <div class="row ">
          <div class="col">
            <div class="container">
              <div class="row">
                <div class="col-sm">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div className="text1">
                        <span className="text">Take</span>
                      </div>
                      <select name="cars" id="cars">
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <div className="text1">
                        <span className="text">ml</span>
                      </div>
                      <select name="cars" id="cars">
                        <option value="volvo">1</option>
                        <option value="saab">2</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-sm">times per day</div>
              </div>
              <div>
                <div class="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    class="form-label"
                  ></label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="you need a total of 15 ml"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div class="col"></div>
        </div>
        <hr className="w-50 ml-5 h-4"></hr>
      </div>

      {/* ......................................................... */}
      <div class="row justify-content-around">
        <div class="col-4">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label class="checkbox" for="">
              Write your own instructions
            </label>
          </div>
        </div>
        <div class="col-4">
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Analyze formula
            </button>
          </div>
        </div>
      </div>
      {/* ................................... */}
      <div class="row justify-content-around mb-6">
        <div class="col-5 mb-6">
          <div>
            <div class="mb-3 mb-8">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="type here"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="col-4"></div>
      </div>
    </>
  );
};

export default Dosage;
