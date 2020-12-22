<script>
import {
    Bar
} from 'vue-chartjs'
import urlBase from "@/js/url";
export default {
    extends: Bar,
    mounted() {
        // Overwriting base render method with actual data.

        this.getChart();
    },
    data() {
        return {
            chart: {
                label: [],
                data: []
            },
            myStyles: {
                height: '50px',
                position: 'relative'
            }
        }
    },
    methods: {
        getChart() {
            this.axios
                .get(urlBase.web + "/grafik/permohonan", {
                    type: "data",
                    status: "proses",
                })
                .then(
                    (r) => {
                        this.chart.label = r.data[0],
                            this.chart.data = r.data[1]
                        this.ShowChart();
                    }
                );
        },
        ShowChart() {
            this.renderChart({
                labels: this.chart.label,
                datasets: [{
                    label: 'Permohonan Perizinan',
                    data: this.chart.data,
                    borderColor: "#FC2525",
                    borderWidth: 1,
                    backgroundColor: '#f87979',
                    pointBorderColor: "white",
                    pointBackgroundColor: "#455cc7", 
                }]
            })
        }
    }
}
</script>

<style>

</style>
